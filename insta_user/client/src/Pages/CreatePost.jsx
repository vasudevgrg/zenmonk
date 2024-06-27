import React from 'react'
import AllPosts from '../Components/AllPosts';

const CreatePost = () => {
    // const [file, setFile]= React.useState("");
    const [title, setTitle]= React.useState("");
    const [desc, setDesc]= React.useState("");

    const uploadPost=()=>{
        fetch("http://localhost:5002/createPost", {
            method:"POST",
            body:JSON.stringify({
                title, desc
            }),
            headers:{
                'Content-Type':'application/json'
            },
            credentials:"include"
        }).then(e=>e.json()).then(e=>console.log(e));
    }
  return (
    <>
    <h2>Create Postt</h2>
    {/* <label>
        Upload File:
        <input onChange={e=>setFile(e.target.value)}/>
    </label> */}
    <label>
        Title:aa
        <input onChange={e=>setTitle(e.target.value)}/>
    </label>
    <label>
        Description:
        <input onChange={e=>setDesc(e.target.value)}/>
    </label>
    <button onClick={uploadPost}>Add Post</button>
    <AllPosts/>
    </>
  )
}

export default CreatePost