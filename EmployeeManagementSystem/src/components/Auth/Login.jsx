import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-screen  flex items-center justify-center'>

      <div className='w-[400px] h-auto p-4 rounded-lg drop-shadow-md border-2 border-gray-700 shadow-lg'>
        <form className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-2xl'>Login</h1>
          <hr className='m-2 w-full border-1  border-gray-700 ' />
          <input className='p-2 w-full rounded-md
          ' type="text" name="email" placeholder='Enter your email' id="" />
          <input className='p-2 w-full rounded-md' type="password" name="password" placeholder='Enter your password' id="" />
          <hr className='mt-4 w-full border-1  border-gray-700 ' />

          <button className='w-full bg-slate-950 hover:bg-slate-900 text-white p-2 rounded-md' type="button">Login</button>

        </form>

      </div>
    </div>
  )
}

export default Login