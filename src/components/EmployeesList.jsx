import EmployeeCard from './EmployeeCard'
import { useSelector } from 'react-redux';

function EmployeesList() {
  const [employees] = useSelector(state => state.employees.employees);
  const filter = useSelector(state => state.employees.filter);

  const filteredEmployees = employees ? employees.filter(employee => {
    return employee.searchKey.toLowerCase().includes(filter.toLowerCase())
  }) : [];

  return (
    <div className='grid grid-cols-3 gap-4'>
      { filteredEmployees && filteredEmployees.map((employee) =>
        <EmployeeCard key={employee.id} employee={employee} />
      )}
    </div>
  )
}

export default EmployeesList