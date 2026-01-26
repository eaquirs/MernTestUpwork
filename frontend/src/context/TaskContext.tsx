import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Task } from '../types/task';
import * as taskService from '../services/taskService';

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  filter: {
    status?: string;
    priority?: string;
  };
}

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Task[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'UPDATE_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'SET_FILTER'; payload: { status?: string; priority?: string } };

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
  filter: {},
};

const taskReducer = (state: TaskState, action: Action): TaskState => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, tasks: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    case 'SET_FILTER':
      return { ...state, filter: { ...state.filter, ...action.payload } };
    default:
      return state;
  }
};

interface TaskContextType extends TaskState {
  fetchTasks: () => Promise<void>;
  addTask: (task: Omit<Task, '_id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  editTask: (id: string, task: Partial<Task>) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
  setFilter: (filter: { status?: string; priority?: string }) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const fetchTasks = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const tasks = await taskService.getTasks(state.filter.status, state.filter.priority);
      dispatch({ type: 'FETCH_SUCCESS', payload: tasks });
    } catch (error: any) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  const addTask = async (taskData: Omit<Task, '_id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newTask = await taskService.createTask(taskData);
      dispatch({ type: 'ADD_TASK', payload: newTask });
    } catch (error: any) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
      throw error;
    }
  };

  const editTask = async (id: string, taskData: Partial<Task>) => {
    try {
      const updatedTask = await taskService.updateTask(id, taskData);
      dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
    } catch (error: any) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
      throw error;
    }
  };

  const removeTask = async (id: string) => {
    try {
      await taskService.deleteTask(id);
      dispatch({ type: 'DELETE_TASK', payload: id });
    } catch (error: any) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
      throw error;
    }
  };

  const setFilter = (filter: { status?: string; priority?: string }) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  // Re-fetch when filter changes is handled by useEffect in the consumer or here. 
  // Ideally, `fetchTasks` depends on `state.filter`. 
  // We can expose `fetchTasks` and let the consumer call it, or use `useEffect` here.
  // For loose coupling, let's expose explicit actions.
  // But wait, if `state.filter` changes, we usually want to refetch.
  // I'll add a useEffect here to watch filter changes.
  
  React.useEffect(() => {
    fetchTasks();
  }, [state.filter.status, state.filter.priority]);

  return (
    <TaskContext.Provider
      value={{
        ...state,
        fetchTasks,
        addTask,
        editTask,
        removeTask,
        setFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
