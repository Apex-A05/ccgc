# Calaca City Global College Learning Management System

A modern, pixel-perfect Learning Management System (LMS) landing page and dashboard for Calaca City Global College.

## Features

- **Modern Design**: Dark navy gradient with gold accents, glassmorphism effects
- **Responsive Layout**: Fully responsive across all device sizes
- **Interactive Elements**: 
  - Live clock and date display
  - Animated program carousel with touch/swipe support
  - Glassmorphism login card with ripple effects
  - Smooth scroll animations
- **Functional Login System**: PHP/MySQL authentication with password hashing
- **Dashboard**: Student/Admin dashboard with course management
- **Mobile-First**: Optimized for mobile devices with hamburger menu

## Requirements

- PHP 7.4 or higher
- MySQL 5.7 or higher
- Apache/Nginx web server
- Modern web browser with JavaScript enabled

## Installation

1. **Clone or extract the project files** to your web server directory (e.g., `htdocs/calaca-lms/`)

2. **Create the MySQL database**:
   ```sql
   CREATE DATABASE calaca_college_lms;
   USE calaca_college_lms;
   
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(50) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       email VARCHAR(100) UNIQUE NOT NULL,
       full_name VARCHAR(100) NOT NULL,
       role ENUM('student', 'instructor', 'admin') DEFAULT 'student',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       last_login TIMESTAMP NULL
   );   