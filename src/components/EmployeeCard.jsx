import { Link } from "react-router-dom"

// This type of constant should be in a different file, but I'll leave it here to be practical.
const gender = {
  M: 'Male',
  F: 'Female'
}

function EmployeeCard({ employee }) {

  const employeeGender = gender[employee.gender]

  return (
    <Link to={`/${employee.id}`}>
      <div className='cursor-pointer'>
        <img src={employee.image} alt='' />
        <p className='text-xl font-bold'>{employee.first_name} {employee.last_name}</p>
        <p>{employeeGender}</p>
        <p>{employee.profession}</p>
      </div>
    </Link>
  )
}

export default EmployeeCard