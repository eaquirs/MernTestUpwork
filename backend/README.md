# Backend API - Task Management System

This is the backend API for the MERN Stack Assessment. The backend is fully implemented and ready to use.

## Features

- ✅ RESTful API with Express.js
- ✅ MongoDB integration with Mongoose
- ✅ Full CRUD operations for tasks
- ✅ Filtering by status and priority
- ✅ Input validation and error handling
- ✅ Seed script for mock data

## API Endpoints

### Get All Tasks
```
GET /api/tasks
Query Parameters:
  - status: 'pending' | 'in-progress' | 'completed' (optional)
  - priority: 'low' | 'medium' | 'high' (optional)

Example: GET /api/tasks?status=pending&priority=high
```

### Get Single Task
```
GET /api/tasks/:id
```

### Create Task
```
POST /api/tasks
Body:
{
  "title": "Task title (required)",
  "description": "Task description (optional)",
  "status": "pending" | "in-progress" | "completed" (default: "pending"),
  "priority": "low" | "medium" | "high" (default: "medium"),
  "dueDate": "2024-01-30" (optional, ISO date string)
}
```

### Update Task
```
PUT /api/tasks/:id
Body: (all fields optional)
{
  "title": "Updated title",
  "status": "completed",
  ...
}
```

### Delete Task
```
DELETE /api/tasks/:id
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp env.example .env
# Edit .env with your MongoDB connection string
```

3. Start the server:
```bash
npm run dev
```

**Note:** The database will be automatically seeded with 30 sample tasks on first startup if the database is empty. No manual seeding is required.

## Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `MONGODB_URI` - MongoDB connection string

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "count": 10  // for GET /api/tasks
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "errors": ["Validation error 1", "Validation error 2"]  // for validation errors
}
```

## Testing with cURL

```bash
# Get all tasks
curl http://localhost:5000/api/tasks

# Get tasks by status
curl http://localhost:5000/api/tasks?status=pending

# Create a task
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"New Task","status":"pending","priority":"high"}'

# Update a task
curl -X PUT http://localhost:5000/api/tasks/TASK_ID \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'

# Delete a task
curl -X DELETE http://localhost:5000/api/tasks/TASK_ID
```

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── controllers/
│   │   └── taskController.js  # Task CRUD operations
│   ├── models/
│   │   └── Task.js        # Task schema/model
│   ├── routes/
│   │   └── taskRoutes.js  # Task routes
│   ├── scripts/
│   │   └── seedData.js    # Seed script for mock data
│   └── server.js          # Express server setup
├── package.json
└── env.example
```
