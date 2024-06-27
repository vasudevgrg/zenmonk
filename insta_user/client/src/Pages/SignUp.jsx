import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    // const [name, setName]= useState("");
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    // const [bio, setBio]= useState("");

    const navigate= useNavigate();

    const handleSignUp=()=>{
        fetch("http://localhost:5002/addUser",{
            method:"POST",
            body:JSON.stringify({
                username, password
            }),
            headers:{
                'Content-Type':'application/json'
            },
            credentials:"include"
        }).then(e=>e.json()).then(e=>navigate("/posts"));
    }
    // const handleSignUp=()=>{
    //     fetch("http://localhost:5002/addUser",{
    //         method:"POST",
    //         body:JSON.stringify({
    //             username, password
    //         }),
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         credentials:"include"
    //     }).then(e=>e.json()).then(e=>navigate("/posts"));
    // }


  return (
   <>
   <h1>Signup Page</h1>
   {/* <label>
    Name:
    <input onChange={e=>setName(e.target.value)}/>
   </label> */}

   <label>
    Email:
    <input onChange={e=>setUsername(e.target.value)}/>
   </label>

   <label>
    Password:
    <input onChange={e=>setPassword(e.target.value)}/>
   </label>

   {/* <label>
    Bio:
    <input onChange={e=>setBio(e.target.value)}/>
   </label> */}

   <button onClick={handleSignUp}>SignUp now</button>

   </>
  )
}

export default SignUp