import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    </div>
  )
}

export default App