import taskService from '../services/taskService.js';
import catchAsync from '../utils/catchAsync.js';

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
export const getAllTasks = catchAsync(async (req, res, next) => {
  const tasks = await taskService.getAllTasks(req.query);
  
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks
  });
});

// @desc    Get single task by ID
// @route   GET /api/tasks/:id
// @access  Public
export const getTaskById = catchAsync(async (req, res, next) => {
  const task = await taskService.getTaskById(req.params.id);

  res.status(200).json({
    success: true,
    data: task
  });
});

// @desc    Create new task
// @route   POST /api/tasks
// @access  Public
export const createTask = catchAsync(async (req, res, next) => {
  const task = await taskService.createTask(req.body);

  res.status(201).json({
    success: true,
    data: task
  });
});

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Public
export const updateTask = catchAsync(async (req, res, next) => {
  const task = await taskService.updateTask(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: task
  });
});

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Public
export const deleteTask = catchAsync(async (req, res, next) => {
  await taskService.deleteTask(req.params.id);

  res.status(204).send();
});
