# EDEPedia - DEPI Academy - eLearning Management System

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Main App](#main-app)
6. [Dashboard App](#dashboard-app)
7. [Admin App](#admin-app)
   <!-- 8. [Installation and Setup](#installation-and-setup) -->
   <!-- 9. [Usage](#usage) -->
8. [Contributing](#contributing)
<!-- 9. [License](#license) -->

## Introduction

EDEPedia is a comprehensive eLearning Management System (eLMS). It provides a platform for students to access courses, interact with instructors, and manage their learning journey. The system consists of three main components: the main app for students, a dashboard app for instructors, and an admin app for system management.

## Features

- User authentication and authorization
- Course browsing and enrollment
- Video lesson playback
- Progress tracking
- Instructor profiles
- Student reviews and ratings
- Shopping cart and checkout process
- Responsive design for various devices

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

## Project Structure

The project is organized into three main applications:

1. Main App (`src/apps/mainApp`)
2. Dashboard App (`src/apps/dashboardApp`)
3. Admin App (`src/apps/adminApp`)

Each app has its own routing and components, with shared components and utilities in the root `src` directory.

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

## 02 Dashboard App

<!-- [To be filled in later] -->

## 03 Admin App

<!-- [To be filled in later] -->

## Installation and Setup

<!-- 1. Clone the repository:
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
   ```

5. Start the development server:
   ```
   npm start
   ``` -->

## Contributing

We welcome contributions to EDEPedia! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with descriptive commit messages
4. Push your changes to your fork
5. Submit a pull request to the main repository

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

<!--
## License

[Include your chosen license information here] -->
