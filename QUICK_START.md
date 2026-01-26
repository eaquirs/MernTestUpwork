# Quick Start Guide

## Prerequisites Installation

### Node.js
- Download from [nodejs.org](https://nodejs.org/)
- Verify: `node --version` (should be v18+)

### MongoDB
**Option 1: MongoDB Atlas (Recommended - Free)**
1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Add it to `backend/.env`

**Option 2: Local MongoDB**
- Download from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
- Install and start MongoDB service
- Use: `mongodb://localhost:27017/task-manager`

## Setup Steps

### 1. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```bash
# Copy the example (rename env.example to .env)
# Or create .env manually with:
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
```

Start the server:
```bash
npm run dev
```

Server should run on `http://localhost:5000`
Test: Visit `http://localhost:5000/api/health`

**Note:** The database will be automatically seeded with 30 sample tasks on first startup if the database is empty.

### 2. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend should run on `http://localhost:3000`

### 3. Verify Connection

- Backend health check: `http://localhost:5000/api/health`
- Frontend should be accessible: `http://localhost:3000`
- Check browser console for any connection errors

## Testing the API

### Using cURL

```bash
# Health check
curl http://localhost:5000/api/health

# Get all tasks (after implementation)
curl http://localhost:5000/api/tasks

# Create a task (after implementation)
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Task","status":"pending","priority":"high"}'
```

### Using Postman or Thunder Client

1. Install Postman or Thunder Client (VS Code extension)
2. Create requests for each endpoint
3. Test with sample data

## Common Issues

### MongoDB Connection Error
- Check your connection string in `.env`
- Verify MongoDB is running (if local)
- Check network/firewall settings (if Atlas)

### Port Already in Use
- Change PORT in `.env` (backend)
- Or kill the process using the port

### CORS Errors
- Ensure backend CORS is configured
- Check that frontend proxy is set in `vite.config.ts`

### Module Not Found
- Run `npm install` in both backend and frontend
- Check Node.js version (v18+)

## Next Steps

1. Implement the Task model in `backend/src/models/Task.js`
2. Create controller functions in `backend/src/controllers/taskController.js`
3. Set up routes in `backend/src/routes/taskRoutes.js`
4. Connect routes in `backend/src/server.js`
5. Build React components
6. Connect frontend to backend API
7. Test everything!

Good luck! 🚀
