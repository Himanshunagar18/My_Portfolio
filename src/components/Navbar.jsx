import { nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  // scroll function
  const handleScroll = (id) => {
    setShowMenu(false) // mobile menu close
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <a href='#home' className='text-3xl font-bold text-white'>
            Himanshu<span className='text-purple-400'>Nagar</span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className='hidden md:flex space-x-10'>
          {['#home', '#about', '#skills', '#projects', '#experience', '#contact'].map((id, i) => (
            <button
              key={i}
              onClick={() => handleScroll(id)}
              className='relative text-white/80 transition duration-300 hover:text-purple-400 group'
            >
              <span>{id.replace('#', '').toUpperCase()}</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full'></span>
            </button>
          ))}
        </div>

        {/* Mobile button */}
        <div className='md:hidden'>
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
          ) : (
            <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className='md:hidden mt-4 bg-dark-300 rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
          {['#home', '#about', '#skills', '#projects', '#experience', '#contact'].map((id, i) => (
            <button
              key={i}
              onClick={() => handleScroll(id)}
              className='text-white/80 transition duration-300 hover:text-purple-400'
            >
              {id.replace('#', '').toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar