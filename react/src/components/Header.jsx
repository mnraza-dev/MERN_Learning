import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex justify-between  bg-emerald-800 text-white px-6 h-[80px]  items-center'>
     <div>
       <h1 className='text-4xl cursor-pointer hover:text-gray-300'>Logo</h1>
     </div>
      <div className=' flex gap-4'>
        <Link className='cursor-pointer text-xl hover:text-gray-300 ' to="/">Home</Link>
        <Link className='cursor-pointer text-xl hover:text-gray-300 ' to="/about">About</Link>
        <Link className='cursor-pointer text-xl hover:text-gray-300 ' to="/product">Product</Link>
        <Link className='cursor-pointer text-xl hover:text-gray-300 ' to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Header