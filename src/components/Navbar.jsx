import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <header className='header'>
        <NavLink to="/" className='md:w-24  w-16 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
            <p className='bg-white text-black'>Home</p>
        </NavLink>

        <nav className='flex text-sm gap-2 font-medium md:text-lg md:gap-8 '>
            <NavLink to="/about" className={( {isActive})=> isActive ? 'text-blue-500 md:w-24  w-16 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' : 'text-black md:w-24  w-16 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' }>
                About
            </NavLink>
            <NavLink to="/projects" className={( {isActive})=> isActive ? 'text-blue-500 md:w-24  w-16 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' : 'text-black md:w-24  w-16 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' }>
                Projects
            </NavLink>
            <NavLink to="/contact" className={( {isActive})=> isActive ? 'text-blue-500 md:w-24  w-16 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' : 'text-black md:w-24  w-16 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' }>
                Contact
            </NavLink>
        </nav>
   </header>
  )
}

export default Navbar
