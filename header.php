<?php
// Check if we're on the dashboard to adjust header style
$isDashboard = basename($_SERVER['PHP_SELF']) === 'dashboard.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Calaca City Global College Learning Management System">
    <title>Calaca City Global College - LMS</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVJkEZSMUkrQ6usKu8zIstOWilEQyUg0GoeSMSNlvbrMJJPWMThtvWysd4dLDsSpD28CCBvvQRQ==" crossorigin="anonymous" referrerpolicy="no-referrer">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="assets/images/school-logo.png">
</head>
<body class="<?php echo $isDashboard ? 'dashboard-page' : 'home-page'; ?>">
    <!-- Header -->
    <header class="main-header <?php echo $isDashboard ? 'dashboard-header' : ''; ?>">
        <div class="header-container">
            <!-- Logo and College Name -->
            <div class="logo-section">
                <div class="logo-circle">
                    <img src="assets/images/school-logo.png" alt="Calaca City Global College Logo" class="college-logo">
                </div>
                <div class="college-title">
                    <h1 class="college-name">CALACA CITY GLOBAL COLLEGE</h1>
                    <p class="system-subtitle">Learning Management System</p>
                </div>
            </div>
            
            <!-- Live Clock and Date -->
            <div class="datetime-section">
                <div class="live-clock">
                    <i class="fas fa-clock"></i>
                    <span id="current-time">00:00:00</span>
                </div>
                <div class="live-date">
                    <i class="fas fa-calendar-alt"></i>
                    <span id="current-date">January 1, 2024</span>
                </div>
            </div>
            
            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" aria-label="Toggle navigation menu">
                <i class="fas fa-bars"></i>
            </button>
            
            <!-- Navigation Menu -->
            <nav class="main-nav">
                <ul class="nav-list">
                    <li><a href="index.php" class="nav-link <?php echo !$isDashboard ? 'active' : ''; ?>">Home</a></li>
                    <li><a href="#programs" class="nav-link">Programs</a></li>
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                    <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in']): ?>
                        <li class="user-menu">
                            <a href="#" class="nav-link user-link">
                                <i class="fas fa-user-circle"></i>
                                <span><?php echo htmlspecialchars($_SESSION['full_name']); ?></span>
                            </a>
                            <div class="user-dropdown">
                                <a href="dashboard.php" class="dropdown-item">
                                    <i class="fas fa-tachometer-alt"></i> Dashboard
                                </a>
                                <a href="logout.php" class="dropdown-item logout">
                                    <i class="fas fa-sign-out-alt"></i> Logout
                                </a>
                            </div>
                        </li>
                    <?php endif; ?>
                </ul>
            </nav>
        </div>
    </header>
    
    <!-- Mobile Navigation (hidden by default) -->
    <nav class="mobile-nav">
        <ul class="mobile-nav-list">
            <li><a href="index.php" class="mobile-nav-link">Home</a></li>
            <li><a href="#programs" class="mobile-nav-link">Programs</a></li>
            <li><a href="#about" class="mobile-nav-link">About</a></li>
            <li><a href="#contact" class="mobile-nav-link">Contact</a></li>
            <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in']): ?>
                <li><a href="dashboard.php" class="mobile-nav-link">Dashboard</a></li>
                <li><a href="logout.php" class="mobile-nav-link logout">Logout</a></li>
            <?php endif; ?>
        </ul>
    </nav>
    
    <!-- Main Content -->
    <main>