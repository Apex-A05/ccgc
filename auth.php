<?php
require_once 'connect.php';

class Auth {
    private $conn;
    
    public function __construct($connection) {
        $this->conn = $connection;
    }
    
    public function login($username, $password) {
        // Sanitize inputs
        $username = $this->conn->real_escape_string($username);
        
        // Prepare statement
        $stmt = $this->conn->prepare("SELECT id, username, password, full_name, role FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            
            // Verify password
            if (password_verify($password, $user['password'])) {
                // Regenerate session ID for security
                session_regenerate_id(true);
                
                // Set session variables
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                $_SESSION['full_name'] = $user['full_name'];
                $_SESSION['role'] = $user['role'];
                $_SESSION['logged_in'] = true;
                
                // Update last login
                $update_stmt = $this->conn->prepare("UPDATE users SET last_login = NOW() WHERE id = ?");
                $update_stmt->bind_param("i", $user['id']);
                $update_stmt->execute();
                
                return ['success' => true, 'user' => $user];
            }
        }
        
        return ['success' => false, 'message' => 'Invalid username or password'];
    }
    
    public function isLoggedIn() {
        return isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
    }
    
    public function logout() {
        // Unset all session variables
        $_SESSION = array();
        
        // Destroy the session
        session_destroy();
        
        // Redirect to login page
        header("Location: index.php");
        exit();
    }
    
    public function requireLogin() {
        if (!$this->isLoggedIn()) {
            header("Location: index.php");
            exit();
        }
    }
}

// Initialize Auth
$auth = new Auth($conn);
?>