import { Link } from "react-router-dom"
import { getGender } from "../utils/getGender"


function EmployeeCard({ employee }) {

  const employeeGender = employee.gender ? getGender(employee.gender) : ''

  return (
    <Link to={`/${employee.id}`}>
      <div className='cursor-pointer text-left'>
        <img src={employee.image} alt='' />
        <p className='text-xl font-bold'>
          {employee.first_name} {employee.last_name}
        </p>
        <p>{employeeGender}</p>
        <p>{employee.profession}</p>
      </div>
    </Link>
  )
}

export default EmployeeCard