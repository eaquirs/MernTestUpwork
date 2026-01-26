import React, { useState, useMemo } from 'react';
import useTasks from '../hooks/useTasks';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import { Task } from '../types/task';

const TaskList: React.FC = () => {
  const { tasks, loading, error, setFilter } = useTasks();
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Sorting state
  const [sortBy, setSortBy] = useState<'dueDate' | 'createdAt' | 'priority'>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter({ [name]: value || undefined });
  };

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => {
      if (sortBy === 'priority') {
        const priorityMap = { high: 3, medium: 2, low: 1 };
        const valA = priorityMap[a.priority] || 0;
        const valB = priorityMap[b.priority] || 0;
        return sortOrder === 'asc' ? valA - valB : valB - valA;
      }
      if (sortBy === 'dueDate') {
        const dateA = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
        const dateB = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
        // If asc: earlier first. Infinity (no date) goes last.
        // If desc: later first. Infinity (no date) goes last? Or first? 
        // Let's keep no-date at the bottom for both for better UX usually.
        
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }
      if (sortBy === 'createdAt') {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }
      return 0;
    });
  }, [tasks, sortBy, sortOrder]);

  if (loading && tasks.length === 0) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div className="task-list">
      <div className="filters-bar">
        <div className="filter-group">
          <label>Status:</label>
          <select 
            name="status" 
            onChange={handleFilterChange}
            className="form-control"
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Priority:</label>
          <select 
            name="priority" 
            onChange={handleFilterChange}
            className="form-control"
          >
            <option value="">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Sort by:</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as any)} 
              className="form-control"
            >
              <option value="createdAt">Created Date</option>
              <option value="dueDate">Due Date</option>
              <option value="priority">Priority</option>
            </select>
            <button 
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="btn btn-secondary btn-icon"
              title={`Sort ${sortOrder === 'asc' ? 'Ascending' : 'Descending'}`}
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>

        <button 
          onClick={() => { setEditingTask(undefined); setIsFormOpen(true); }}
          className="btn btn-primary btn-add"
        >
          + Add Task
        </button>
      </div>

      <div className="task-grid">
        {sortedTasks.map(task => (
          <TaskCard 
            key={task._id} 
            task={task} 
            onEdit={(task) => { setEditingTask(task); setIsFormOpen(true); }} 
          />
        ))}
      </div>

      {sortedTasks.length === 0 && !loading && (
        <div className="empty-state">
          <h3>No tasks found</h3>
          <p>Try adjusting your filters or add a new task.</p>
        </div>
      )}

      {isFormOpen && (
        <TaskForm 
          initialData={editingTask} 
          onClose={() => setIsFormOpen(false)} 
        />
      )}
    </div>
  );
};

export default TaskList;
