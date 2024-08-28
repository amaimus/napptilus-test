import './App.css'
import { Navigate, Route, Routes, Link } from 'react-router-dom'

import EmployeesView from './components/EmployeesView' 
import EmployeeDetails from './components/EmployeeDetails' 
import Header from './components/Header' 



function App() {

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      
      <Routes>
        <Route path='/' element={<Navigate to='/employees' />} />
        <Route path='/employees' element={<EmployeesView />} />
        <Route path='/employees/:employeeId' element={<EmployeeDetails />} />
      </Routes>        
    </div>
  )
}

export default App
