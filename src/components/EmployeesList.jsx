import EmployeeCard from './EmployeeCard'


function EmployeesList({employees}) {

  return (
    <div className='grid grid-cols-3 gap-4'>
      { employees && employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))
      }
    </div>
  )
}

export default EmployeesList