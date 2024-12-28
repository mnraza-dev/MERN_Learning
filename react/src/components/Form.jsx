import React, { useState } from 'react'

const Form = () => {
    
  const [name, setName] = useState("");

  const changeName = () => {
    setName("John Doe");
  }
  const submitHandler = (e) => {
    e.preventDefault();

  }
    return (
        <>

            <h1>Hello {name}!</h1>
            {/* <button onClick={changeName}>Change User</button> */}

            <form onSubmit={submitHandler}>

                <input type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)} />

                <button type='submit'>
                    Change User
                </button>

            </form>
        </>
    )
}

export default Form