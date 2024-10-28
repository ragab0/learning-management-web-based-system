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

## Introduction

EDEPedia or DEPI Academy is a comprehensive eLearning Management System (eLMS) that provides a platform for students to access courses, interact with instructors, and manage their learning journey. The system consists of three main components: the main app for students, a dashboard app for instructors, and an admin app for system management.

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
- Skeleton for skeleton components on initialization and loading
- Axios for API requests
- React Hook Form for form handling
- React Select for advanced select inputs
- React Player for video playback
- React Markdown for rendering markdown content
- React Toastify for notifications
- Socket.io for real-time communication
- Chart.js for data visualization

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
- Displays team members and their mentor (About)

### Course Listing

- Allows users to browse and search for courses
- Implements pagination, filtering and sorting options
- Displays course cards with key information

### Course Details Page

- Shows comprehensive course information
- Includes instructor details and reviews
- Provides options to enroll or add to cart

### Shopping Cart

- Manages selected courses
- Allows users to adjust quantities, wishes or remove items

### Wishlist

- Enables users to save courses for later consideration

### Checkout Process

- All courses are free till now!
  <!-- - Securely handles payment information -->
  <!-- - Integrates with payment gateways -->
  <!-- - Confirms successful enrollment -->

### User Profile

- Displays enrolled, archived courses and progress
- Manages account settings and preferences
- Shows reviews, assigned instructors and the ability to massaging each one

### Instructor Profiles

- Highlights instructor qualifications and courses
- Displays ratings and student feedback

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
- Shows recent courses, reviews and student engagement metrics

### Course Management

- Allows creation and editing of courses
- Integrated with YoutubeApi to extract videos (titles, sources and thumbnails) from a playlist
<!--

### Student Management

- Lists enrolled students for each course
- Allows communication with students through messaging system -->

<!-- ### Analytics

- Presents detailed analytics on course performance
- Tracks student progress and completion rates -->

### Review Management

- Displays student reviews for instructor's courses

### Profile Management

- Allows instructors to update their profile information
- Manages instructor qualifications and expertise areas using markdown

## 03 Admin App

The admin app provides system-wide management capabilities:

### User Management

- Manages all user accounts (students, instructors, admins)
- Ability to create, edit, or deactivate user accounts

### Course Oversight

- Reviews and approves new courses
- Monitors course quality and student feedback

## Installation and Setup

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```
   **Note: server must be run either on 3000 or 3001** for API security

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
