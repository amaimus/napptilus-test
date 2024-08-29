import './App.css'
import { Route, Routes } from 'react-router-dom'

import EmployeesView from './components/EmployeesView' 
import EmployeeDetails from './components/EmployeeDetails' 
import Header from './components/Header' 



function App() {

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      
      <Routes>
        <Route path='/' element={<EmployeesView />} />
        <Route path='/:id' element={<EmployeeDetails />} />
      </Routes>        
    </div>
  )
}

export default App
