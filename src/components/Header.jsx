import { Link } from 'react-router-dom'
import avatarImage from '../assets/avatar.png'

function EmployeesView() {

  return (
    <header className='bg-gray-300'>
      <ul className='px-16 py-4'>
        <li className='flex gap-8'>
          <img src={avatarImage} className='w-8' alt='Vite logo' />
          <Link to={`/employees`} className='font-bold'>Oompa Loompa's Crew</Link>
        </li>
      </ul>
    </header>
  )
}

export default EmployeesView