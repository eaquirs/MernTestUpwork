/**
 * Base Repository Interface
 * This class serves as a contract for all repositories.
 * It ensures that any data source implementation follows the same structure.
 */
class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    throw new Error('Method not implemented');
  }

  async findById(id) {
    throw new Error('Method not implemented');
  }

  async findAll(filter = {}, sort = {}) {
    throw new Error('Method not implemented');
  }

  async update(id, data) {
    throw new Error('Method not implemented');
  }

  async delete(id) {
    throw new Error('Method not implemented');
  }
}

export default BaseRepository;
