import EmployeeCard from './EmployeeCard'
import { useSelector } from 'react-redux';

function EmployeesList() {
  const [employees] = useSelector(state => state.employees.employees);
  return (
    <div className='grid grid-cols-3 gap-4'>
      { employees && employees.map((employee) =>
        <EmployeeCard key={employee.id} employee={employee} />
      )}
    </div>
  )
}

export default EmployeesList