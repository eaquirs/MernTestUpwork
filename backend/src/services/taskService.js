import taskRepository from '../repositories/taskRepository.js';
import AppError from '../utils/AppError.js';

class TaskService {
  async getAllTasks(query) {
    const { status, priority } = query;
    const filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    return await taskRepository.findAll(filter);
  }

  async getTaskById(id) {
    const task = await taskRepository.findById(id);
    if (!task) {
      throw new AppError('Task not found', 404);
    }
    return task;
  }

  async createTask(data) {
    return await taskRepository.create(data);
  }

  async updateTask(id, data) {
    const task = await taskRepository.update(id, data);
    if (!task) {
      throw new AppError('Task not found', 404);
    }
    return task;
  }

  async deleteTask(id) {
    const task = await taskRepository.delete(id);
    if (!task) {
      throw new AppError('Task not found', 404);
    }
    return task;
  }
}

export default new TaskService();
