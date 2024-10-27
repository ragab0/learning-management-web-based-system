# EDEPedia - DEPI Academy - eLearning Management System

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Main App](#main-app)
6. [Dashboard App](#dashboard-app)
7. [Admin App](#admin-app)
8. [Installation and Setup](#installation-and-setup)
9. [Usage](#usage)
10. [Contributing](#contributing)
11. [License](#license)

## Introduction

EDEPedia is a comprehensive eLearning Management System (eLMS) developed for DEPI Academy. It provides a platform for students to access courses, interact with instructors, and manage their learning journey. The system consists of three main components: the main app for students, a dashboard app for instructors, and an admin app for system management.

## Features

- User authentication and authorization
- Course creation, management, and enrollment
- Video lesson playback and content management
- Progress tracking and analytics
- Instructor profiles and course management
- Student reviews and ratings
- Shopping cart and checkout process
- Responsive design for various devices
- Admin panel for user and content management
- Real-time messaging and notifications

## Technologies Used

- React.js
- Redux Toolkit for state management
- React Router for navigation
- Bootstrap for styling
- Axios for API requests
- React Hook Form for form handling
- React Player for video playback
- React Markdown for rendering markdown content
- React Toastify for notifications
- Socket.io for real-time communication
- Chart.js for data visualization
- React Select for advanced select inputs

## Project Structure

The project is organized into three main applications:

1. Main App (`src/apps/mainApp`)
2. Dashboard App (`src/apps/dashboardApp`)
3. Admin App (`src/apps/adminApp`)

Each app has its own routing and components, with shared components, utilities, and data in the root `src` directory.

## 01 Main App

The main app is the primary interface for students and visitors. It includes the following key features and components:

### Home Page

- Showcases featured courses and instructors
- Provides quick access to course categories
- Displays testimonials and statistics

### Course Listing

- Allows users to browse and search for courses
- Implements filtering and sorting options
- Displays course cards with key information

### Course Details Page

- Shows comprehensive course information
- Includes instructor details and reviews
- Provides options to enroll or add to cart

### Shopping Cart

- Manages selected courses
- Allows users to adjust quantities or remove items
- Calculates total price and applies discounts

### Wishlist

- Enables users to save courses for later consideration
- Provides quick access to wished courses from the user profile

### Checkout Process

- Securely handles payment information
- Integrates with payment gateways
- Confirms successful enrollment

### User Profile

- Displays enrolled courses and progress
- Manages account settings and preferences
- Shows purchase history and achievements

### Instructor Profiles

- Highlights instructor qualifications and courses
- Displays ratings and student feedback
- Allows students to follow instructors

### Search Functionality

- Enables users to find courses, instructors, and content
- Implements auto-suggestions and advanced filtering

### Messaging System

- Allows students to communicate with instructors
- Supports real-time notifications for new messages

### Course Content

- Provides access to baughtCourses
- Implements a progress tracking system for each course

## 02 Dashboard App

The dashboard app is designed for instructors to manage their courses and interact with students. Key features include:

### Instructor Dashboard

- Displays an overview of course performance and earnings
- Shows recent reviews and student engagement metrics

### Course Management

- Allows creation and editing of courses
- Supports uploading and organizing course content (videos, documents, quizzes)
- Provides tools for setting course pricing and promotional offers

### Student Management

- Lists enrolled students for each course
- Allows communication with students through messaging system

### Analytics

- Presents detailed analytics on course performance
- Tracks student progress and completion rates

### Review Management

- Displays student reviews for instructor's courses
- Allows instructors to respond to reviews

### Earnings and Payouts

- Shows earnings from course sales
- Manages payout information and history

### Profile Management

- Allows instructors to update their profile information
- Manages instructor qualifications and expertise areas

## 03 Admin App

The admin app provides system-wide management capabilities:

### User Management

- Manages all user accounts (students, instructors, admins)
- Ability to create, edit, or deactivate user accounts

### Course Oversight

- Reviews and approves new courses
- Monitors course quality and student feedback

### Content Moderation

- Reviews and moderates user-generated content (reviews, discussions)
- Manages reported content or users

### System Analytics

- Provides platform-wide analytics on user engagement, course performance, and revenue
- Generates reports on key performance indicators

### Payment Management

- Oversees payment processing and refunds
- Manages instructor payouts

### Site Configuration

- Manages site-wide settings and configurations
- Controls feature toggles and system parameters

### Category and Tag Management

- Creates and manages course categories and tags
- Organizes courses for improved discoverability

## Installation and Setup

1. Clone the repository:

   ```
   git clone https://github.com/your-username/edepedia-lms.git
   ```

2. Navigate to the project directory:

   ```
   cd edepedia-lms
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add necessary environment variables:

   ```
   REACT_APP_API_BASE_URL=http://your-api-url.com
   REACT_APP_SOCKET_URL=http://your-socket-url.com
   ```

5. Start the development server:
   ```
   npm start
   ```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:3000` to access the application. Use the following routes for different apps:

- Main App: `http://localhost:3000`
- Dashboard App: `http://localhost:3000/dashboard`
- Admin App: `http://localhost:3000/admin`

## Contributing

We welcome contributions to EDEPedia! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with descriptive commit messages
4. Push your changes to your fork
5. Submit a pull request to the main repository

Please ensure your code adheres to the project's coding standards:

- Follow the Prettier configuration in the `.prettierrc` file at the root of the project.
- Adhere to the VSCode settings in the `.vscode/settings.json` file.
