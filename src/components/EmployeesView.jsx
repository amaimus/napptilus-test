import { useEffect, useState } from "react"
import EmployeesList from "./EmployeesList"

const EMPLOYEES_ENDPOINT = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1'


function EmployeesView() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch(EMPLOYEES_ENDPOINT)
      .then(res => res.json())
      .then(data => setEmployees(data.results))
  }, [])

  return (
    <div className='px-16'>

      <div className='text-center my-8'>
        <p className='text-4xl'>Find your Oompa Loompa</p>
        <span className='text-xl text-muted'>There are more than 100k</span>
      </div>

      <EmployeesList employees={employees} />
    </div>
  )
}

export default EmployeesView