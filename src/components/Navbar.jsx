import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <header className='header'>
        <NavLink to="/" className=' w-24 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
            <p className='bg-white text-black'>Home</p>
        </NavLink>

        <nav className='flex text-lg gap-7 font-medium '>
            <NavLink to="/about" className={( {isActive})=> isActive ? 'text-blue-500 w-24 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' : 'text-black w-24 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' }>
                About
            </NavLink>
            <NavLink to="/projects" className={( {isActive})=> isActive ? 'text-blue-500 w-24 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' : 'text-black w-24 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' }>
                Projects
            </NavLink>
        </nav>
   </header>
  )
}

export default Navbar
