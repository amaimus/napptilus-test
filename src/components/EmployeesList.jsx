import EmployeeCard from './EmployeeCard'
import { useSelector } from 'react-redux';
import { setPage } from '../redux/employeesSlice';
import { useDispatch } from 'react-redux';

function EmployeesList() {
  const dispatch = useDispatch();

  const employees = useSelector(state => state.employees.employees);
  const filter = useSelector(state => state.employees.filter);
  const page = useSelector(state => state.employees.page);
  const totalPages = useSelector(state => state.employees.totalPages);

  const filteredEmployees = Array.isArray(employees) ? employees.filter(employee => {
    return employee.searchKey.toLowerCase().includes(filter.toLowerCase());
  }) : [];

  const handleClick = () => {
    dispatch(setPage(page+1));
  }
  return (
    <section>
      <div className='grid grid-cols-3 gap-4'>
        { filteredEmployees && filteredEmployees.map((employee) =>
          <EmployeeCard key={employee.id} employee={employee} />
        )}
      
      </div>
      { page <= totalPages && !filter &&
        <div className='mt-8'>
          <button onClick={handleClick} className='border px-4 py-2 rounded'> Load More employees </button>
        </div>
      }
    </section>
  )
}

export default EmployeesList