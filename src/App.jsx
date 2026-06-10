import Dashboard from './pages/dashboard/Dashboard'
import { AppProvider } from './context/AppContext'
import './App.css'

function App() {
  return (
    <div className='main-page'>
      <AppProvider>
        <Dashboard />
      </AppProvider>
    </div>
  )
}

export default App
