import Task from '../models/Task.js';

// Mock data - 30 tasks with varied statuses, priorities, and dates
export const mockTasks = [
  {
    title: 'Complete project documentation',
    description: 'Write comprehensive documentation for the MERN stack assessment project including API endpoints and setup instructions.',
    status: 'in-progress',
    priority: 'high',
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
  },
  {
    title: 'Review code quality',
    description: 'Perform code review and ensure all best practices are followed.',
    status: 'pending',
    priority: 'medium',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
  },
  {
    title: 'Set up CI/CD pipeline',
    description: 'Configure continuous integration and deployment pipeline for the project.',
    status: 'pending',
    priority: 'high',
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
  },
  {
    title: 'Write unit tests',
    description: 'Create unit tests for backend API endpoints and frontend components.',
    status: 'pending',
    priority: 'medium',
    dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) // 4 days from now
  },
  {
    title: 'Optimize database queries',
    description: 'Review and optimize MongoDB queries for better performance.',
    status: 'completed',
    priority: 'low'
    // No dueDate for completed tasks
  },
  {
    title: 'Implement user authentication',
    description: 'Add JWT-based authentication system for secure API access.',
    status: 'pending',
    priority: 'high',
    dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) // 10 days from now
  },
  {
    title: 'Design responsive UI',
    description: 'Ensure the frontend is fully responsive and works on all device sizes.',
    status: 'in-progress',
    priority: 'medium',
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 days from now
  },
  {
    title: 'Fix bug in task filtering',
    description: 'Resolve issue where task filtering by priority is not working correctly.',
    status: 'completed',
    priority: 'high'
    // No dueDate for completed tasks
  },
  {
    title: 'Add error logging',
    description: 'Implement comprehensive error logging system for better debugging.',
    status: 'pending',
    priority: 'low',
    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 days from now
  },
  {
    title: 'Create API documentation',
    description: 'Generate API documentation using Swagger or similar tool.',
    status: 'in-progress',
    priority: 'medium',
    dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) // 6 days from now
  },
  {
    title: 'Refactor legacy code',
    description: 'Modernize old codebase to use current best practices and patterns.',
    status: 'pending',
    priority: 'medium',
    dueDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000) // 8 days from now
  },
  {
    title: 'Implement caching strategy',
    description: 'Add Redis caching to improve application performance and reduce database load.',
    status: 'pending',
    priority: 'high',
    dueDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000) // 12 days from now
  },
  {
    title: 'Update dependencies',
    description: 'Update all npm packages to their latest stable versions and fix security vulnerabilities.',
    status: 'completed',
    priority: 'medium'
    // No dueDate for completed tasks
  },
  {
    title: 'Add dark mode support',
    description: 'Implement dark mode theme toggle for better user experience.',
    status: 'in-progress',
    priority: 'low',
    dueDate: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000) // 9 days from now
  },
  {
    title: 'Setup monitoring and alerts',
    description: 'Configure application monitoring tools and set up alerting for critical issues.',
    status: 'pending',
    priority: 'high',
    dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days from now
  },
  {
    title: 'Create user onboarding flow',
    description: 'Design and implement a smooth onboarding experience for new users.',
    status: 'pending',
    priority: 'medium',
    dueDate: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000) // 11 days from now
  },
  {
    title: 'Optimize bundle size',
    description: 'Reduce JavaScript bundle size through code splitting and tree shaking.',
    status: 'completed',
    priority: 'medium'
    // No dueDate for completed tasks
  },
  {
    title: 'Add internationalization',
    description: 'Implement i18n support for multiple languages.',
    status: 'pending',
    priority: 'low',
    dueDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000) // 20 days from now
  },
  {
    title: 'Implement file upload feature',
    description: 'Add secure file upload functionality with validation and storage.',
    status: 'in-progress',
    priority: 'high',
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) // 1 day from now
  },
  {
    title: 'Create admin dashboard',
    description: 'Build an admin dashboard for managing users and system settings.',
    status: 'pending',
    priority: 'medium',
    dueDate: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000) // 13 days from now
  },
  {
    title: 'Fix memory leaks',
    description: 'Identify and resolve memory leak issues in the application.',
    status: 'completed',
    priority: 'high'
    // No dueDate for completed tasks
  },
  {
    title: 'Add email notifications',
    description: 'Implement email notification system for important events.',
    status: 'pending',
    priority: 'medium',
    dueDate: new Date(Date.now() + 16 * 24 * 60 * 60 * 1000) // 16 days from now
  },
  {
    title: 'Improve accessibility',
    description: 'Enhance application accessibility to meet WCAG 2.1 AA standards.',
    status: 'in-progress',
    priority: 'low',
    dueDate: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000) // 18 days from now
  },
  {
    title: 'Setup backup system',
    description: 'Configure automated database backups and recovery procedures.',
    status: 'pending',
    priority: 'high',
    dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) // 6 days from now
  },
  {
    title: 'Create mobile app',
    description: 'Develop native mobile application for iOS and Android platforms.',
    status: 'pending',
    priority: 'medium',
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
  },
  {
    title: 'Implement rate limiting',
    description: 'Add rate limiting to prevent API abuse and ensure fair usage.',
    status: 'completed',
    priority: 'high'
    // No dueDate for completed tasks
  },
  {
    title: 'Add social media integration',
    description: 'Integrate social media sharing and login functionality.',
    status: 'pending',
    priority: 'low',
    dueDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000) // 25 days from now
  },
  {
    title: 'Optimize images',
    description: 'Compress and optimize images to improve page load times.',
    status: 'in-progress',
    priority: 'medium',
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
  },
  {
    title: 'Implement search functionality',
    description: 'Add full-text search capability with Elasticsearch integration.',
    status: 'pending',
    priority: 'high',
    dueDate: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000) // 17 days from now
  },
  {
    title: 'Create data export feature',
    description: 'Allow users to export their data in various formats (CSV, JSON, PDF).',
    status: 'pending',
    priority: 'low',
    dueDate: new Date(Date.now() + 22 * 24 * 60 * 60 * 1000) // 22 days from now
  }
];

export const seedDatabase = async () => {
  try {
    // Check if database already has tasks
    const taskCount = await Task.countDocuments();
    
    if (taskCount > 0) {
      console.log(`Database already has ${taskCount} tasks. Skipping seed.`);
      return;
    }

    // Insert mock tasks
    const tasks = await Task.insertMany(mockTasks);
    console.log(`✅ Seeded ${tasks.length} tasks successfully`);

  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Standalone seed function for direct execution (with process.exit)
const seedDatabaseStandalone = async () => {
  try {
    const mongoose = (await import('mongoose')).default;
    const dotenv = (await import('dotenv')).default;
    
    dotenv.config();
    
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    await seedDatabase();
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run seed if called directly (for backward compatibility)
// Check if this file is being run directly
const isMainModule = import.meta.url === `file://${process.argv[1]}` || 
                      process.argv[1] && process.argv[1].endsWith('seedData.js');
if (isMainModule) {
  seedDatabaseStandalone();
}
