import React from 'react';
import { Task } from '../types/task';
import useTasks from '../hooks/useTasks';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit }) => {
  const { removeTask } = useTasks();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await removeTask(task._id);
    }
  };


  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="badges">
          <span className={`badge badge-priority-${task.priority}`}>
            {task.priority}
          </span>
          <span className={`badge badge-status-${task.status.replace(' ', '-')}`}>
            {task.status}
          </span>
        </div>
      </div>
      
      {task.description && <p className="task-description">{task.description}</p>}
      
      <div className="task-footer">
        <div className="task-date">
          {task.dueDate && (
            <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
          )}
        </div>
        
        <div className="task-actions">
          <button className="btn btn-secondary" onClick={() => onEdit(task)}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
