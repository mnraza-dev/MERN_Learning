import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-between  bg-emerald-800 text-white px-6 h-[80px]  items-center'>
     <div>
       <h1 className='text-4xl cursor-pointer hover:text-gray-300'>Logo</h1>
     </div>
      <div className=' flex gap-4'>
        <a className='cursor-pointer text-xl hover:text-gray-300 ' href="/">Home</a>
        <a className='cursor-pointer text-xl hover:text-gray-300 ' href="/about">About</a>
        <a className='cursor-pointer text-xl hover:text-gray-300 ' href="/product">Product</a>
        <a className='cursor-pointer text-xl hover:text-gray-300 ' href="/contact">Contact</a>
      </div>
    </nav>
  )
}

export default Header