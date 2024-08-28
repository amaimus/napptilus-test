import './App.css'
import { Navigate, Route, Routes, Link } from 'react-router-dom'

import EmployeesList from './components/EmployeesList' 
import EmployeeDetails from './components/EmployeeDetails' 



function App() {

  return (
    <>
      <header>
        <Link to={`/employees`}>Oompa Loompa's Crew</Link>
      </header>


      <Routes>
        <Route path='/' element={<Navigate to='/employees' />} />
        <Route path='/employees' element={<EmployeesList />} />
        <Route path='/employees/:employeeId' element={<EmployeeDetails />} />
      </Routes>        
    </>
  )
}

export default App
