<?php
require_once 'includes/connect.php';
require_once 'includes/auth.php';

// Require login to access dashboard
$auth->requireLogin();

// Get user info
$user_id = $_SESSION['user_id'];
$username = $_SESSION['username'];
$full_name = $_SESSION['full_name'];
$role = $_SESSION['role'];
?>
<?php include 'includes/header.php'; ?>

<div class="dashboard-container">
    <!-- Dashboard Header -->
    <div class="dashboard-header">
        <div class="welcome-section">
            <h1 class="welcome-title">Welcome back, <?php echo htmlspecialchars($full_name); ?>!</h1>
            <p class="welcome-subtitle">Here's what's happening in your learning journey today.</p>
        </div>
        
        <div class="dashboard-actions">
            <button class="btn-action">
                <i class="fas fa-plus"></i>
                <span>New Course</span>
            </button>
            <button class="btn-action">
                <i class="fas fa-bell"></i>
                <span>Notifications</span>
                <span class="badge">3</span>
            </button>
        </div>
    </div>
    
    <!-- Dashboard Stats -->
    <div class="dashboard-stats">
        <div class="stat-card">
            <div class="stat-icon" style="background: linear-gradient(135deg, #1E88E5, #0D47A1);">
                <i class="fas fa-book-open"></i>
            </div>
            <div class="stat-content">
                <h3 class="stat-number">5</h3>
                <p class="stat-label">Active Courses</p>
            </div>
        </div>
        
        <div class="stat-card">
            <div class="stat-icon" style="background: linear-gradient(135deg, #F5A623, #FF9800);">
                <i class="fas fa-tasks"></i>
            </div>
            <div class="stat-content">
                <h3 class="stat-number">12</h3>
                <p class="stat-label">Pending Assignments</p>
            </div>
        </div>
        
        <div class="stat-card">
            <div class="stat-icon" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                <i class="fas fa-calendar-check"></i>
            </div>
            <div class="stat-content">
                <h3 class="stat-number">3</h3>
                <p class="stat-label">Upcoming Exams</p>
            </div>
        </div>
        
        <div class="stat-card">
            <div class="stat-icon" style="background: linear-gradient(135deg, #9C27B0, #6A1B9A);">
                <i class="fas fa-comments"></i>
            </div>
            <div class="stat-content">
                <h3 class="stat-number">7</h3>
                <p class="stat-label">Unread Messages</p>
            </div>
        </div>
    </div>
    
    <!-- Main Dashboard Content -->
    <div class="dashboard-content">
        <!-- Left Column -->
        <div class="dashboard-column">
            <!-- Recent Courses -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h3 class="card-title">Recent Courses</h3>
                    <a href="#" class="card-link">View All</a>
                </div>
                <div class="card-body">
                    <div class="course-list">
                        <div class="course-item">
                            <div class="course-icon" style="background-color: #1E88E5;">
                                <i class="fas fa-code"></i>
                            </div>
                            <div class="course-info">
                                <h4>CS 101: Introduction to Programming</h4>
                                <p>Dr. Maria Santos • Next class: Tomorrow, 9:00 AM</p>
                            </div>
                            <div class="course-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 75%;"></div>
                                </div>
                                <span class="progress-text">75% Complete</span>
                            </div>
                        </div>
                        
                        <div class="course-item">
                            <div class="course-icon" style="background-color: #F5A623;">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div class="course-info">
                                <h4>ENT 201: Business Analytics</h4>
                                <p>Prof. Juan Dela Cruz • Assignment due: Dec 15</p>
                            </div>
                            <div class="course-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 60%;"></div>
                                </div>
                                <span class="progress-text">60% Complete</span>
                            </div>
                        </div>
                        
                        <div class="course-item">
                            <div class="course-icon" style="background-color: #4CAF50;">
                                <i class="fas fa-balance-scale"></i>
                            </div>
                            <div class="course-info">
                                <h4>PS 301: Political Theory</h4>
                                <p>Dr. Anna Reyes • Exam: Next Week</p>
                            </div>
                            <div class="course-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 90%;"></div>
                                </div>
                                <span class="progress-text">90% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Upcoming Events -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h3 class="card-title">Upcoming Events</h3>
                    <a href="#" class="card-link">Calendar</a>
                </div>
                <div class="card-body">
                    <div class="events-list">
                        <div class="event-item">
                            <div class="event-date">
                                <span class="event-day">15</span>
                                <span class="event-month">DEC</span>
                            </div>
                            <div class="event-info">
                                <h4>Final Examination Period Begins</h4>
                                <p>All Courses • 8:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                        
                        <div class="event-item">
                            <div class="event-date">
                                <span class="event-day">20</span>
                                <span class="event-month">DEC</span>
                            </div>
                            <div class="event-info">
                                <h4>Research Symposium</h4>
                                <p>University Auditorium • 9:00 AM - 4:00 PM</p>
                            </div>
                        </div>
                        
                        <div class="event-item">
                            <div class="event-date">
                                <span class="event-day">22</span>
                                <span class="event-month">DEC</span>
                            </div>
                            <div class="event-info">
                                <h4>Christmas Break Begins</h4>
                                <p>Campus-wide • All day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Right Column -->
        <div class="dashboard-column">
            <!-- Announcements -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h3 class="card-title">Announcements</h3>
                    <a href="#" class="card-link">See All</a>
                </div>
                <div class="card-body">
                    <div class="announcements-list">
                        <div class="announcement-item">
                            <div class="announcement-badge urgent">
                                <i class="fas fa-exclamation-circle"></i>
                            </div>
                            <div class="announcement-content">
                                <h4>System Maintenance</h4>
                                <p>The LMS will be unavailable on December 10 from 2:00 AM to 6:00 AM for scheduled maintenance.</p>
                                <span class="announcement-time">2 hours ago</span>
                            </div>
                        </div>
                        
                        <div class="announcement-item">
                            <div class="announcement-badge info">
                                <i class="fas fa-info-circle"></i>
                            </div>
                            <div class="announcement-content">
                                <h4>New Library Resources Available</h4>
                                <p>Access to 5,000+ new academic journals and e-books has been added to the digital library.</p>
                                <span class="announcement-time">1 day ago</span>
                            </div>
                        </div>
                        
                        <div class="announcement-item">
                            <div class="announcement-badge success">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div class="announcement-content">
                                <h4>Scholarship Applications Open</h4>
                                <p>Applications for the Spring 2024 scholarship program are now being accepted until January 15.</p>
                                <span class="announcement-time">3 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Quick Actions -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h3 class="card-title">Quick Actions</h3>
                </div>
                <div class="card-body">
                    <div class="quick-actions-grid">
                        <a href="#" class="quick-action">
                            <div class="action-icon">
                                <i class="fas fa-file-upload"></i>
                            </div>
                            <span>Submit Assignment</span>
                        </a>
                        
                        <a href="#" class="quick-action">
                            <div class="action-icon">
                                <i class="fas fa-video"></i>
                            </div>
                            <span>Join Class</span>
                        </a>
                        
                        <a href="#" class="quick-action">
                            <div class="action-icon">
                                <i class="fas fa-download"></i>
                            </div>
                            <span>Download Materials</span>
                        </a>
                        
                        <a href="#" class="quick-action">
                            <div class="action-icon">
                                <i class="fas fa-comment-alt"></i>
                            </div>
                            <span>Messages</span>
                        </a>
                        
                        <a href="#" class="quick-action">
                            <div class="action-icon">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <span>Grades</span>
                        </a>
                        
                        <a href="#" class="quick-action">
                            <div class="action-icon">
                                <i class="fas fa-cog"></i>
                            </div>
                            <span>Settings</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- User Profile Summary -->
            <div class="dashboard-card profile-summary">
                <div class="card-header">
                    <h3 class="card-title">Your Profile</h3>
                    <a href="#" class="card-link">Edit</a>
                </div>
                <div class="card-body">
                    <div class="profile-header">
                        <div class="profile-avatar">
                            <img src="https://ui-avatars.com/api/?name=<?php echo urlencode($full_name); ?>&background=1E88E5&color=fff" alt="<?php echo htmlspecialchars($full_name); ?>">
                        </div>
                        <div class="profile-info">
                            <h4><?php echo htmlspecialchars($full_name); ?></h4>
                            <p class="profile-role"><?php echo ucfirst($role); ?></p>
                            <p class="profile-id">Student ID: CCGC-<?php echo str_pad($user_id, 6, '0', STR_PAD_LEFT); ?></p>
                        </div>
                    </div>
                    
                    <div class="profile-stats">
                        <div class="profile-stat">
                            <span class="stat-value">3.8</span>
                            <span class="stat-label">GPA</span>
                        </div>
                        <div class="profile-stat">
                            <span class="stat-value">95%</span>
                            <span class="stat-label">Attendance</span>
                        </div>
                        <div class="profile-stat">
                            <span class="stat-value">24</span>
                            <span class="stat-label">Credits</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'includes/footer.php'; ?>