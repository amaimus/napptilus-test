import { useEffect } from "react"
import EmployeesList from "./EmployeesList"
import EmployeesFilter from "./EmployeesFilter"

import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, setTotalPages } from '../redux/employeesSlice';
const EMPLOYEES_ENDPOINT = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas'


function EmployeesView() {
  const dispatch = useDispatch();
  const page = useSelector(state => state.employees.page);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(EMPLOYEES_ENDPOINT + `?page=${page}`);
        const data = await response.json();
        dispatch(addEmployee(data.results));
        dispatch(setTotalPages(data.total));
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, [dispatch, page]);

  return (
    <div className='px-16'>
      <div className='mt-4'>
        <EmployeesFilter />
      </div>

      <div className='text-center mt-4 mb-8'>

        <div className='text-center my-8'>
          <p className='text-4xl'>Find your Oompa Loompa</p>
          <span className='text-xl text-muted'>There are more than 100k</span>
        </div>
        <EmployeesList />
      </div>
    </div>
  )
}

export default EmployeesView