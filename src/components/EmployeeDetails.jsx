
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGender } from "../utils/getGender"
const EMPLOYEE_ENDPOINT = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/'

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState([])
  const employeeGender = employee.gender ? getGender(employee.gender) : ''

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(EMPLOYEE_ENDPOINT + id);
        const data = await response.json();
        setEmployee(data)
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, [id]);

  return (
    <section className='mt-8 px-16'>
      <div className='flex gap-4'>
        <img src={employee.image} alt='' className='max-w-2xl' />
        <div>
          <div>
            <p className='text-xl font-bold'>{employee.first_name} {employee.last_name}</p>
            <p>{employeeGender}</p>
            <p>{employee.profession}</p>
          </div>
          <div className='mt-8'>
            <div dangerouslySetInnerHTML={{ __html: employee.description }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmployeeDetails