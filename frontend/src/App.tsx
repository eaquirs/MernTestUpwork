import { TaskProvider } from './context/TaskContext'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  return (
    <TaskProvider>
      <div className="App" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <header className="App-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1>Task Management System</h1>
          <p>MERN Stack Assessment</p>
        </header>
        
        <main>
          <TaskList />
        </main>
      </div>
    </TaskProvider>
  )
}

export default App
