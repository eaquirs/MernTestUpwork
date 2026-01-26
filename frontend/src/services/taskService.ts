import api from './api';
import { Task } from '../types/task';

export const getTasks = async (status?: string, priority?: string) => {
  const params = new URLSearchParams();
  if (status) params.append('status', status);
  if (priority) params.append('priority', priority);
  
  const response = await api.get<{ data: Task[] }>(`/tasks?${params.toString()}`);
  return response.data.data;
};

export const createTask = async (task: Omit<Task, '_id' | 'createdAt' | 'updatedAt'>) => {
  const response = await api.post<{ data: Task }>('/tasks', task);
  return response.data.data;
};

export const updateTask = async (id: string, task: Partial<Task>) => {
  const response = await api.put<{ data: Task }>(`/tasks/${id}`, task);
  return response.data.data;
};

export const deleteTask = async (id: string) => {
  const response = await api.delete<{ message: string }>(`/tasks/${id}`);
  return response.data;
};
