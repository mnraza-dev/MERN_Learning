import React from 'react'

const Login = () => {

  const submitHandler = () => {
    console.log("Hello guys!, Form submitted");

  }
  return (
    <div className='h-screen w-screen  flex items-center justify-center'>

      <div className='w-[400px] h-auto p-6 rounded-2xl drop-shadow-md border-2 border-emerald-800 shadow-lg'>
        <form onSubmit={submitHandler} className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-2xl'>Login</h1>
          <input className='placeholder:text-gray-400  border-2 bg-transparent outline-none border-emerald-800  px-2 py-4 w-full rounded-xl
          ' type="text" name="email" placeholder='Enter your email' id="" />
          <input className='placeholder:text-gray-400   bg-transparent outline-none border-emerald-800 px-2 py-4  w-full rounded-xl border-2' type="password" name="password" placeholder='Enter your password' id="" />

          <button className='w-full bg-emerald-800 hover:bg-emerald-900 text-white p-2 rounded-md' type="submit">Login</button>

        </form>

      </div>
    </div>
  )
}

export default Login