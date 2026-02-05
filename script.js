// Calaca City Global College LMS - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLiveClock();
    initMobileMenu();
    initLoginForm();
    initProgramsCarousel();
    initAnimations();
    initContactForm();
    initStatsCounter();
    initSmoothScroll();
    initPasswordToggle();
    initUserMenu();
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Live Clock and Date
function initLiveClock() {
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');
    
    if (!timeElement || !dateElement) return;
    
    function updateDateTime() {
        const now = new Date();
        
        // Format time (HH:MM:SS)
        const time = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Format date (Month Day, Year)
        const date = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        timeElement.textContent = time;
        dateElement.textContent = date;
    }
    
    // Update immediately and then every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (!menuToggle || !mobileNav) return;
    
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        this.classList.toggle('active');
        
        // Toggle icon
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-times')) {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        }
    });
}

// Login Form Handling
function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.btn-login');
        const originalText = submitBtn.innerHTML;
        const username = this.querySelector('#username').value.trim();
        const password = this.querySelector('#password').value;
        
        // Basic validation
        if (!username || !password) {
            showAlert('Please fill in all fields', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.innerHTML = '<span class="loading"></span>';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // In real implementation, this would be an actual fetch request
            console.log('Login attempt:', { username, password });
            
            // For demo purposes, simulate successful login
            const demoUsers = ['admin', 'student', 'instructor'];
            if (demoUsers.includes(username.toLowerCase()) && password.length >= 6) {
                showAlert('Login successful! Redirecting...', 'success');
                
                // Redirect to dashboard after successful login
                setTimeout(() => {
                    window.location.href = 'dashboard.php';
                }, 1500);
            } else {
                showAlert('Invalid credentials. Please try again.', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        }, 1500);
    });
}

// Programs Carousel
function initProgramsCarousel() {
    const carousel = document.getElementById('programsCarousel');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const indicators = document.getElementById('carouselIndicators');
    
    if (!carousel) return;
    
    // Sample programs data
    const programs = [
        {
            id: 1,
            title: 'BS Computer Science',
            description: 'A comprehensive program focusing on software development, algorithms, data structures, and artificial intelligence.',
            image: 'cs-logo.png',
            seal: 'cs-logo.png',
            ribbon: 'STEM Program',
            duration: '4 Years',
            color: '#1E88E5'
        },
        {
            id: 2,
            title: 'BS Entrepreneurship',
            description: 'Develop business acumen and innovative thinking to launch and manage successful enterprises in the digital age.',
            image: 'program2.jpg',
            seal: 'seal-entrepreneurship.png',
            ribbon: 'Business',
            duration: '4 Years',
            color: '#F5A623'
        },
        {
            id: 3,
            title: 'BA Political Science',
            description: 'Study political systems, international relations, and public policy to prepare for careers in government and diplomacy.',
            image: 'program3.jpg',
            seal: 'seal-political.png',
            ribbon: 'Liberal Arts',
            duration: '4 Years',
            color: '#4CAF50'
        },
        {
            id: 4,
            title: 'BS Public Administration',
            description: 'Learn effective governance, public policy analysis, and organizational management for public service careers.',
            image: 'program4.jpg',
            seal: 'seal-publicadmin.png',
            ribbon: 'Government',
            duration: '4 Years',
            color: '#9C27B0'
        }
    ];
    
    // Generate program cards
    programs.forEach((program, index) => {
        // Create card
        const card = document.createElement('div');
        card.className = 'program-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="assets/images/${program.image}" alt="${program.title}" loading="lazy">
                <div class="card-ribbon" style="background: ${program.color}">${program.ribbon}</div>
                <div class="card-seal">
                    <img src="assets/images/${program.seal}" alt="Program Seal">
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${program.title}</h3>
                <p class="card-description">${program.description}</p>
                <div class="card-footer">
                    <span class="card-duration">${program.duration}</span>
                    <a href="#" class="card-link">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
        
        // Add click event
        card.addEventListener('click', function() {
            showProgramModal(program);
        });
        
        carousel.appendChild(card);
        
        // Create indicator
        if (indicators) {
            const indicator = document.createElement('div');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.dataset.index = index;
            indicator.addEventListener('click', () => scrollToProgram(index));
            indicators.appendChild(indicator);
        }
    });
    
    // Carousel navigation
    if (prevBtn && nextBtn) {
        const scrollAmount = 340; // card width + gap
        
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            updateIndicators();
        });
        
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            updateIndicators();
        });
    }
    
    // Touch/swipe support
    let startX;
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0 && nextBtn) {
                // Swipe left - go next
                carousel.scrollBy({ left: 340, behavior: 'smooth' });
            } else if (prevBtn) {
                // Swipe right - go previous
                carousel.scrollBy({ left: -340, behavior: 'smooth' });
            }
            updateIndicators();
        }
    });
    
    // Update indicators on scroll
    carousel.addEventListener('scroll', debounce(updateIndicators, 100));
    
    function updateIndicators() {
        if (!indicators) return;
        
        const scrollPosition = carousel.scrollLeft;
        const cardWidth = 320; // Fixed card width
        const gap = 24; // Gap between cards
        const activeIndex = Math.round(scrollPosition / (cardWidth + gap));
        
        indicators.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === activeIndex);
        });
    }
    
    function scrollToProgram(index) {
        const cardWidth = 320;
        const gap = 24;
        carousel.scrollTo({
            left: index * (cardWidth + gap),
            behavior: 'smooth'
        });
    }
    
    // Auto-advance carousel
    let autoScrollInterval;
    
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (nextBtn) {
                carousel.scrollBy({ left: 340, behavior: 'smooth' });
                updateIndicators();
            }
        }, 5000); // Change every 5 seconds
    }
    
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }
    
    // Pause auto-scroll on hover
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
    
    // Start auto-scroll
    startAutoScroll();
}

// Program Modal
function showProgramModal(program) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('programModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'programModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-body">
                    <!-- Content will be inserted here -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add close event
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.classList.remove('active');
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Update modal content
    const modalBody = modal.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${program.title}</h2>
            <span class="program-badge" style="background: ${program.color}">${program.ribbon}</span>
        </div>
        <div class="modal-grid">
            <div class="modal-image">
                <img src="assets/images/${program.image}" alt="${program.title}">
            </div>
            <div class="modal-details">
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <h4>Duration</h4>
                        <p>${program.duration}</p>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-graduation-cap"></i>
                    <div>
                        <h4>Degree</h4>
                        <p>Bachelor's Degree</p>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-language"></i>
                    <div>
                        <h4>Language</h4>
                        <p>English</p>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-calendar-alt"></i>
                    <div>
                        <h4>Next Intake</h4>
                        <p>August 2024</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-description">
            <h3>Program Overview</h3>
            <p>${program.description}</p>
            <p>This program combines theoretical knowledge with practical application through internships, research projects, and industry partnerships. Graduates are prepared for successful careers in their chosen fields with a strong foundation in critical thinking, problem-solving, and ethical leadership.</p>
        </div>
        <div class="modal-actions">
            <button class="btn-pill btn-primary" onclick="applyToProgram(${program.id})">
                <span>Apply Now</span>
                <i class="fas fa-paper-plane"></i>
            </button>
            <button class="btn-pill btn-secondary" onclick="downloadBrochure(${program.id})">
                <span>Download Brochure</span>
                <i class="fas fa-download"></i>
            </button>
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
}

// Scroll Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.stat-card, .program-card, .info-card').forEach(el => {
        observer.observe(el);
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showAlert('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(data.email)) {
            showAlert('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.btn-contact');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showAlert('Message sent successfully! We will get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Stats Counter Animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    if (statNumbers.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        element.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(current).toLocaleString();
                    }
                }, 16);
                
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                const mobileNav = document.querySelector('.mobile-nav');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    const menuToggle = document.querySelector('.mobile-menu-toggle');
                    const icon = menuToggle.querySelector('i');
                    if (icon.classList.contains('fa-times')) {
                        icon.classList.replace('fa-times', 'fa-bars');
                    }
                }
                
                // Scroll to target
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Password Visibility Toggle
function initPasswordToggle() {
    const toggleBtn = document.getElementById('togglePassword');
    
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const icon = this.querySelector('i');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
}

// User Menu
function initUserMenu() {
    const userMenu = document.querySelector('.user-menu');
    
    if (!userMenu) return;
    
    userMenu.addEventListener('mouseenter', () => {
        const dropdown = userMenu.querySelector('.user-dropdown');
        if (dropdown) {
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateY(0)';
        }
    });
    
    userMenu.addEventListener('mouseleave', () => {
        const dropdown = userMenu.querySelector('.user-dropdown');
        if (dropdown) {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.transform = 'translateY(10px)';
        }
    });
}

// Utility Functions
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    
    let icon = 'info-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'success') icon = 'check-circle';
    
    alert.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    // Insert alert
    const loginCard = document.querySelector('.login-card');
    if (loginCard) {
        loginCard.insertBefore(alert, loginCard.querySelector('.login-form'));
    } else {
        document.body.insertBefore(alert, document.body.firstChild);
    }
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Modal functions for program details
function applyToProgram(programId) {
    showAlert(`Application started for Program ID: ${programId}. Redirecting to application form...`, 'success');
    // In a real application, this would redirect to an application form
}

function downloadBrochure(programId) {
    showAlert(`Downloading brochure for Program ID: ${programId}...`, 'success');
    // In a real application, this would trigger a file download
}

// Add CSS for modal
const modalStyles = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(14, 27, 42, 0.9);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: var(--z-modal);
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-medium);
        padding: var(--spacing-lg);
    }
    
    .modal.active {
        opacity: 1;
        visibility: visible;
    }
    
    .modal-content {
        background: var(--gradient-primary);
        border-radius: var(--border-radius-xl);
        width: 100%;
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: var(--shadow-xl);
    }
    
    .modal-close {
        position: absolute;
        top: var(--spacing-lg);
        right: var(--spacing-lg);
        background: none;
        border: none;
        color: var(--white);
        font-size: 2rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all var(--transition-fast);
        z-index: 1;
    }
    
    .modal-close:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .modal-body {
        padding: var(--spacing-xxl);
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-xl);
    }
    
    .modal-header h2 {
        margin: 0;
        color: var(--white);
    }
    
    .program-badge {
        padding: var(--spacing-xs) var(--spacing-lg);
        border-radius: var(--border-radius-pill);
        color: var(--primary-dark);
        font-weight: 600;
        font-size: 0.875rem;
    }
    
    .modal-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-xl);
        margin-bottom: var(--spacing-xl);
    }
    
    .modal-image {
        border-radius: var(--border-radius-lg);
        overflow: hidden;
    }
    
    .modal-image img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        display: block;
    }
    
    .modal-details {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
    }
    
    .detail-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-lg);
        padding: var(--spacing-lg);
        background: rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius-lg);
    }
    
    .detail-item i {
        font-size: 1.5rem;
        color: var(--accent-gold);
        width: 30px;
        text-align: center;
    }
    
    .detail-item h4 {
        color: var(--white);
        margin: 0 0 var(--spacing-xs) 0;
        font-size: 1rem;
    }
    
    .detail-item p {
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
        font-size: 0.875rem;
    }
    
    .modal-description {
        background: rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-xl);
        margin-bottom: var(--spacing-xl);
    }
    
    .modal-description h3 {
        color: var(--white);
        margin-bottom: var(--spacing-md);
    }
    
    .modal-description p {
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: var(--spacing-md);
    }
    
    .modal-description p:last-child {
        margin-bottom: 0;
    }
    
    .modal-actions {
        display: flex;
        gap: var(--spacing-lg);
        justify-content: center;
    }
    
    @media (max-width: 768px) {
        .modal-grid {
            grid-template-columns: 1fr;
        }
        
        .modal-actions {
            flex-direction: column;
        }
        
        .modal-body {
            padding: var(--spacing-xl) var(--spacing-lg);
        }
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.background-image');
    
    if (heroBackground) {
        heroBackground.style.transform = `scale(1.1) translateY(${scrolled * 0.5}px)`;
    }
    
    // Sticky header effect
    const header = document.querySelector('.main-header');
    if (header) {
        if (scrolled > 100) {
            header.style.background = 'rgba(14, 27, 42, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(14, 27, 42, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
        }
    }
});

// Add ripple effect to buttons
document.addEventListener('click', function(e) {
    if (e.target.closest('.btn-pill, .btn-login')) {
        const button = e.target.closest('.btn-pill, .btn-login');
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple animation to CSS
const rippleAnimation = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const rippleStyle = document.createElement('style');
rippleStyle.textContent = rippleAnimation;
document.head.appendChild(rippleStyle);

// Initialize tooltips
document.querySelectorAll('[title]').forEach(element => {
    element.addEventListener('mouseenter', function(e) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = this.getAttribute('title');
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 10}px`;
        tooltip.style.transform = 'translateX(-50%) translateY(-100%)';
    });
    
    element.addEventListener('mouseleave', function() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// Add tooltip styles
const tooltipStyles = `
    .tooltip {
        position: fixed;
        background: var(--primary-dark);
        color: var(--white);
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--border-radius-sm);
        font-size: 0.75rem;
        white-space: nowrap;
        z-index: var(--z-tooltip);
        pointer-events: none;
        box-shadow: var(--shadow-md);
    }
    
    .tooltip::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px 5px 0;
        border-style: solid;
        border-color: var(--primary-dark) transparent transparent;
    }
`;

const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = tooltipStyles;
document.head.appendChild(tooltipStyle);

// Handle form validation styles
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('invalid', function(e) {
        e.preventDefault();
        this.classList.add('invalid');
        showAlert('Please fill in this field correctly.', 'error');
    });
    
    input.addEventListener('input', function() {
        this.classList.remove('invalid');
    });
});

// Add invalid input styles
const invalidStyles = `
    .invalid {
        border-color: #dc3545 !important;
        background: rgba(220, 53, 69, 0.1) !important;
    }
    
    .invalid:focus {
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.2) !important;
    }
`;

const invalidStyle = document.createElement('style');
invalidStyle.textContent = invalidStyles;
document.head.appendChild(invalidStyle);

// Page load animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add loaded styles
const loadedStyles = `
    body:not(.loaded) * {
        animation-play-state: paused !important;
    }
    
    .hero-content,
    .login-card-container {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.8s ease forwards;
    }
    
    .hero-content {
        animation-delay: 0.2s;
    }
    
    .login-card-container {
        animation-delay: 0.4s;
    }
`;

const loadedStyle = document.createElement('style');
loadedStyle.textContent = loadedStyles;
document.head.appendChild(loadedStyle);