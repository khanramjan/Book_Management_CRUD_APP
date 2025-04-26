import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">BookStore</h1>
        <div className="space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `text-white font-medium hover:underline ${isActive ? 'underline' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/show-books" 
            className={({ isActive }) =>
              `text-white font-medium hover:underline ${isActive ? 'underline' : ''}`
            }
          >
            Show Books
          </NavLink>
          <NavLink 
            to="/add-books" 
            className={({ isActive }) =>
              `text-white font-medium hover:underline ${isActive ? 'underline' : ''}`
            }
          >
            Add Book
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
