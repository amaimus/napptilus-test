import { useEffect } from "react"
import EmployeesList from "./EmployeesList"

import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
const EMPLOYEES_ENDPOINT = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1'


function EmployeesView() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(EMPLOYEES_ENDPOINT);
        const data = await response.json();
        dispatch(addEmployee(data.results));
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, [dispatch]);

  return (
    <div className='px-16'>
      <div className='text-center my-8'>
        <p className='text-4xl'>Find your Oompa Loompa</p>
        <span className='text-xl text-muted'>There are more than 100k</span>
      </div>
      <EmployeesList  />
    </div>
  )
}

export default EmployeesView