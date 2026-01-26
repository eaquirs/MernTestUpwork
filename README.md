# MERN Task Management System

A full-stack task management application built with MongoDB, Express, React, and Node.js (MERN). This project was completed as part of a technical assessment.

## 🚀 Features

### Core Functionality
- **Task Management**: Create, Read, Update, and Delete (CRUD) tasks.
- **Task Properties**: Title, Description, Status (Pending/In-Progress/Completed), Priority (Low/Medium/High), Due Date.
- **Advanced Filtering**: Filter tasks by Status and Priority.
- **Sorting (Option C)**: Sort tasks by:
  - **Due Date** (Ascending/Descending)
  - **Priority** (High-Low/Low-High)
  - **Created Date** (Newest/Oldest)
- **Responsive Design**: Mobile-friendly UI using CSS Variables, Flexbox, and Grid.
- **Date Picker**: Integrated `react-datepicker` for intuitive date selection.

### Technical Highlights
- **Backend**:
  - RESTful API with Express.js
  - MongoDB integration via Mongoose
  - Global Error Handling Middleware
  - Request Validation (Schema & Enums)
  - **Auto-Seeding**: Database automatically populates with 30 sample tasks if empty.
  - Strict Environment Variable configuration.
- **Frontend**:
  - Built with **Vite** + **React** + **TypeScript**.
  - Custom `useTasks` hook for state management.
  - Centralized API service with Axios.
  - Strict Type Safety with TypeScript interfaces.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas URI)

### 1. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Configure Environment Variables
cp .env.example .env
# Edit .env if needed (Default: PORT=5000, MONGODB_URI=mongodb://localhost:27017/task-manager)

# Start Development Server
npm run dev
```
*The server will start on port 5000. On first run, it will seed the database with sample data.*

### 2. Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Configure Environment Variables
cp .env.example .env
# Default: VITE_API_URL=http://localhost:5000/api

# Start Development Server
npm run dev
```

### 3. Access the Application
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔮 Future Improvements

Given more time, I would implement:
1.  **Authentication & Authorization**: JWT-based user login to support private task lists.
2.  **Pagination**: Server-side pagination to handle large datasets efficiently.
3.  **Drag & Drop**: Kanban-style board view for managing task status.
4.  **Testing**:
    -   Backend: Unit tests with Jest/Supertest.
    -   Frontend: Component tests with Vitest & React Testing Library.
5.  **CI/CD**: GitHub Actions workflow for automated linting and testing.
6.  **Accessibility**: Full ARIA compliance audit and keyboard navigation improvements.

---

## 📂 Project Structure

```
MERN-assessment/
├── backend/
│   ├── src/
│   │   ├── config/         # DB Connection
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Error handling & validation
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API routes
│   │   ├── scripts/        # Seeding logic
│   │   └── services/       # Business logic
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # Global state (if applicable)
│   │   ├── hooks/          # Custom hooks (useTasks)
│   │   ├── services/       # API integration
│   │   └── types/          # TypeScript interfaces
│   └── .env.example
└── README.md
```

---
<!-- Original Assessment Instructions below for reference -->
<details>
<summary><strong>Original Assessment Instructions</strong></summary>

# MERN Stack Developer Assessment

Welcome to the MERN Stack Developer Assessment! This assessment is designed to evaluate your skills in building full-stack web applications using MongoDB, Express, React, and Node.js.

## Overview

You have **3-4 hours** to complete this assessment. The goal is to demonstrate your ability to:
- Build a RESTful API with Node.js, Express, and MongoDB
- Create a React frontend application with TypeScript and Vite
- Write clean, maintainable, and well-structured code
- Implement best practices and proper error handling

## Assessment Tasks

### Task 1: Backend API Development (1.5-2 hours)
Build a RESTful API for a **Task Management System** with the following requirements:

**Requirements:**
- Create a MongoDB schema/model for tasks with the following fields:
  - `title` (String, required)
  - `description` (String, optional)
  - `status` (String, enum: 'pending', 'in-progress', 'completed', required)
  - `priority` (String, enum: 'low', 'medium', 'high', required)
  - `dueDate` (Date, optional)
  - `createdAt` (Date, auto-generated)
  - `updatedAt` (Date, auto-generated)

- Implement the following API endpoints:
  - `GET /api/tasks` - Get all tasks (with optional query params for filtering by status and/or priority)
  - `GET /api/tasks/:id` - Get a single task by ID
  - `POST /api/tasks` - Create a new task
  - `PUT /api/tasks/:id` - Update an existing task
  - `DELETE /api/tasks/:id` - Delete a task

- Add proper error handling and validation
- Use environment variables for configuration (MongoDB connection string, port, etc.)
- Include proper HTTP status codes

**Deliverables:**
- Working Express server with all endpoints
- MongoDB connection and schema/model
- Error handling middleware
- `.env.example` file

### Task 2: Frontend Application Development (1.5-2 hours)
Build a React application with TypeScript that consumes the backend API:

**Requirements:**
- Use **Vite** as the build tool
- Use **TypeScript** for all components and utilities
- Create the following components:
  - Task List component (displays all tasks)
  - Task Form component (for creating/editing tasks)
  - Task Card/Item component (displays individual task details)
  
- Implement the following features:
  - View all tasks in a list/grid layout
  - Create new tasks
  - Update existing tasks
  - Delete tasks
  - Filter tasks by status (pending, in-progress, completed)
  - Filter tasks by priority (low, medium, high)
  - Show appropriate loading states and error messages

- Use proper TypeScript types/interfaces
- Implement responsive design (mobile-friendly)
- Add basic styling (CSS modules, styled-components, or Tailwind CSS)

**Deliverables:**
- Working React application with all features
- TypeScript types/interfaces
- API service/utility functions
- Responsive UI

### Task 3: Additional Feature (30-45 minutes)
Choose and implement ONE of the following:

**Option A: Search Functionality**
- Add a search bar to filter tasks by title or description
- Implement real-time search as the user types

**Option B: Task Statistics**
- Create a dashboard/statistics view showing:
  - Total number of tasks
  - Tasks by status (count)
  - Tasks by priority (count)
  - Display this data in a visually appealing way (charts or cards)

**Option C: Task Sorting**
- Add ability to sort tasks by:
  - Due date (ascending/descending)
  - Priority (high to low)
  - Created date (newest/oldest)

## Evaluation Criteria

Your submission will be evaluated based on:

1. **Code Quality** (30%)
   - Clean, readable code
   - Proper code organization
   - Consistent coding style
   - TypeScript usage

2. **Functionality** (30%)
   - All required features working
   - Proper error handling
   - API endpoints working correctly
   - Frontend-backend integration

3. **Best Practices** (20%)
   - RESTful API design
   - Proper HTTP status codes
   - Environment variable usage
   - Security considerations

4. **User Experience** (10%)
   - Intuitive UI/UX
   - Responsive design
   - Loading states
   - Error messages

5. **Documentation** (10%)
   - Code comments where necessary
   - README updates (if needed)
   - Clear setup instructions

## Submission Guidelines

1. **Fork this repository** or create a new repository
2. **Complete all tasks** within the time limit
3. **Commit your work** with meaningful commit messages
4. **Push to your repository** and share the link
5. **Include a brief summary** of:
   - What you implemented
   - Any challenges you faced
   - What you would improve given more time

</details>
