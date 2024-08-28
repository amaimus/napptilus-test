import Search from '../assets/search.png'

function EmployeesFilter() {

  return (
    <div className='flex justify-end'>
      <div className='relative right-0 top-0'>
        <input
          type='text'
          placeholder='Search'
          className='w-48 p-2 border border-slate-500 rounded-lg'
          style={{ paddingInlineEnd: '40px' }} // Correct syntax
        />

        <img src={Search} alt='' className='absolute w-7 right-3 top-2.5 opacity-50 border-l border-slate-500 pl-2' />

      </div>
    </div>
  )
}

export default EmployeesFilter