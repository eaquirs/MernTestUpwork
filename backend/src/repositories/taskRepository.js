import BaseRepository from './baseRepository.js';
import Task from '../models/Task.js';

class TaskRepository extends BaseRepository {
  constructor() {
    super(Task);
  }

  async create(data) {
    return await this.model.create(data);
  }

  async findById(id) {
    return await this.model.findById(id);
  }

  async findAll(filter = {}, sort = { createdAt: -1 }) {
    return await this.model.find(filter).sort(sort);
  }

  async update(id, data) {
    return await this.model.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

export default new TaskRepository();
