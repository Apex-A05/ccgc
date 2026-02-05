<?php
require_once 'includes/connect.php';
require_once 'includes/auth.php';
?>
<?php include 'includes/header.php'; ?>

<!-- Hero Section -->
<section class="hero-section" id="home">
    <div class="hero-background">
        <div class="background-image"></div>
        <div class="gradient-overlay"></div>
    </div>
    
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="hero-title">
                Experience the 
                <span class="highlight-gold">Power of Education</span>
            </h1>
            
            <p class="hero-description">
                At Calaca City Global College, we blend cutting-edge technology with 
                proven pedagogical approaches to create transformative learning 
                experiences. Our commitment to academic excellence and innovation 
                prepares students for success in a rapidly evolving global landscape.
            </p>
            
            <div class="hero-quote">
                <i class="fas fa-quote-left"></i>
                <span class="quote-text">Learn Together! Live Great!</span>
                <i class="fas fa-quote-right"></i>
            </div>
            
            <div class="hero-buttons">
                <a href="#programs" class="btn-pill btn-primary">
                    <span class="btn-text">Academic Programs</span>
                    <i class="fas fa-arrow-right btn-icon"></i>
                </a>
                <a href="#about" class="btn-pill btn-secondary">
                    <span class="btn-text">About Us</span>
                    <i class="fas fa-info-circle btn-icon"></i>
                </a>
            </div>
        </div>
        
        <!-- Login Card -->
        <div class="login-card-container">
            <div class="login-card">
                <div class="card-logo">
                    <img src="assets/images/school-logo.png" alt="College Logo">
                </div>
                
                <div class="card-header">
                    <h2 class="card-title">Portal Login</h2>
                    <p class="card-subtitle">Sign in to your account</p>
                </div>
                
                <?php if (isset($_GET['error'])): ?>
                    <div class="alert alert-error">
                        <i class="fas fa-exclamation-circle"></i>
                        <span><?php echo htmlspecialchars($_GET['error']); ?></span>
                    </div>
                <?php endif; ?>
                
                <?php if (isset($_GET['success'])): ?>
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle"></i>
                        <span><?php echo htmlspecialchars($_GET['success']); ?></span>
                    </div>
                <?php endif; ?>
                
                <form action="login.php" method="POST" class="login-form" id="loginForm">
                    <div class="form-group">
                        <label for="username" class="form-label">
                            <i class="fas fa-user"></i> Username
                        </label>
                        <div class="input-with-icon">
                            <i class="input-icon fas fa-user"></i>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder="Enter your username" 
                                required
                                autocomplete="username"
                            >
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="password" class="form-label">
                            <i class="fas fa-lock"></i> Password
                        </label>
                        <div class="input-with-icon">
                            <i class="input-icon fas fa-lock"></i>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                required
                                autocomplete="current-password"
                            >
                            <button type="button" class="password-toggle" id="togglePassword">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox" name="remember" id="remember">
                            <span class="checkmark"></span>
                            Remember me
                        </label>
                        <a href="#" class="forgot-password">Forgot Password?</a>
                    </div>
                    
                    <button type="submit" class="btn-login" id="loginButton">
                        <span class="btn-text">SIGN IN</span>
                        <i class="fas fa-sign-in-alt btn-icon"></i>
                    </button>
                </form>
                
                <div class="card-footer">
                    <p class="footer-text">
                        Need an account? 
                        <a href="#" class="register-link">Contact Admissions</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Academic Programs Section -->
<section class="programs-section" id="programs">
    <div class="section-header">
        <h2 class="section-title">Academic Programs</h2>
        <p class="section-subtitle">Shaping Future Leaders</p>
        <div class="section-divider"></div>
    </div>
    
    <div class="programs-container">
        <!-- Carousel Controls -->
        <button class="carousel-btn carousel-prev" aria-label="Previous programs">
            <i class="fas fa-chevron-left"></i>
        </button>
        
        <div class="programs-carousel" id="programsCarousel">
            <!-- Program cards will be loaded by JavaScript -->
        </div>
        
        <button class="carousel-btn carousel-next" aria-label="Next programs">
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>
    
    <div class="carousel-indicators" id="carouselIndicators">
        <!-- Indicators will be added by JavaScript -->
    </div>
</section>

<!-- About Section -->
<section class="about-section" id="about">
    <div class="about-container">
        <div class="about-content">
            <h2 class="about-title">About Calaca City Global College</h2>
            <p class="about-description">
                Founded in 2005, Calaca City Global College has established itself as a premier 
                institution of higher learning, committed to academic excellence, innovative 
                research, and community engagement. Our state-of-the-art campus provides a 
                dynamic environment where students from diverse backgrounds come together to 
                learn, grow, and prepare for successful careers.
            </p>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number" data-count="5000">0</h3>
                        <p class="stat-label">Students Enrolled</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-chalkboard-teacher"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number" data-count="250">0</h3>
                        <p class="stat-label">Expert Faculty</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number" data-count="45">0</h3>
                        <p class="stat-label">Academic Programs</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number" data-count="12">0</h3>
                        <p class="stat-label">Modern Facilities</p>
                    </div>
                </div>
            </div>
            
            <div class="mission-vision">
                <div class="mission">
                    <h3><i class="fas fa-bullseye"></i> Our Mission</h3>
                    <p>To be a training venue of excellent and professional people whose expertise are tailored to the needs of local and global competencies.</p>
                </div>
                <div class="vision">
                    <h3><i class="fas fa-eye"></i> Our Vision</h3>
                    <p>A higher educational institution embodying optimism and aspirations of an affordable and quality education for Calacazens.</p>
                </div>
            </div>
        </div>
        
        <div class="about-image">
            <div class="image-container">
                <img src="assets/images/campus-bg.png" alt="Calaca City Global College Campus">
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="contact-section" id="contact">
    <div class="contact-container">
        <div class="contact-header">
            <h2 class="contact-title">Get In Touch</h2>
            <p class="contact-subtitle">We're here to help you with your educational journey</p>
        </div>
        
        <div class="contact-grid">
            <div class="contact-info">
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="info-content">
                        <h3>Visit Our Campus</h3>
                        <p>Global Education Ave, Calaca City 4212, Philippines</p>
                    </div>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div class="info-content">
                        <h3>Call Us</h3>
                        <p>+63 (43) 123-4567</p>
                        <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                    </div>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="info-content">
                        <h3>Email Us</h3>
                        <p>info@calaca.edu.ph</p>
                        <p>admissions@calaca.edu.ph</p>
                    </div>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="info-content">
                        <h3>Office Hours</h3>
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 12:00 PM</p>
                    </div>
                </div>
            </div>
            
            <div class="contact-form-container">
                <form class="contact-form" id="contactForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="contact-name">Full Name</label>
                            <input type="text" id="contact-name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-email">Email Address</label>
                            <input type="email" id="contact-email" name="email" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-subject">Subject</label>
                        <input type="text" id="contact-subject" name="subject" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-message">Message</label>
                        <textarea id="contact-message" name="message" rows="5" required></textarea>
                    </div>
                    
                    <button type="submit" class="btn-contact">
                        <span>Send Message</span>
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>