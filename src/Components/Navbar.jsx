import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Link } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import MotionWrapper from '../Animation/MotionWrapper'

const Navbar = () => {
    const { theme ,toggleTheme } = useContext(ThemeContext)
  return (
    <MotionWrapper>

    <nav className='w-full px-10 py-4 flex justify-between items-center bg-white dark:bg-gray-800 dark:text-white shadow-md fixed'>
        <Link to='/' className='text-2xl font-bold'>
         Dev <span className='text-blue-500'>Blog</span>
        </Link>
        <div className='flex items-center gap-4'>
            <Link to='/admin' className='hover:text-blue-500'> 
              Admin Panel
             </Link>
             <button onClick={toggleTheme} className='px-3 py-2 border rounded-md'> 
                {theme === 'light' ? <FaMoon size={22}/> : <FaSun size={22} className='text-yellow-500'/> }
             </button>
        </div>
    </nav>
    </MotionWrapper>
  )
}

export default Navbar