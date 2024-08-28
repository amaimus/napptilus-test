import './App.css'
import { Navigate, Route, Routes, Link } from 'react-router-dom'

import EmployeesList from './components/EmployeesList' 
import EmployeeDetails from './components/EmployeeDetails' 
import Header from './components/Header' 



function App() {

  return (
    <body className='max-w-screen-xl mx-auto'>
      <Header />
      
      <Routes>
        <Route path='/' element={<Navigate to='/employees' />} />
        <Route path='/employees' element={<EmployeesList />} />
        <Route path='/employees/:employeeId' element={<EmployeeDetails />} />
      </Routes>        
    </body>
  )
}

export default App
