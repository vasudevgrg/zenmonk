import React, { useState } from 'react'

const AllPosts = () => {
    const [posts, setPosts]= useState([]);
    const [showReply, setShowReply]= useState(false);


    React.useEffect(()=>{
        fetch("http://localhost:5002/allPosts", {
            method:"GET",
            credentials:"include"
        }).then(e=>e.json()).then(e=>setPosts(e.posts)).catch((err)=>console.log(err));
    });

    const handleComment
  return (
    <>
    <h3>All Posts:</h3>
    {
        posts.map(e=>(
            <div>
                <h3>
                    {e.name}
                </h3>
                <div>{e.desc}</div>
                <button> Add Reply</button>
                {
                    showReply &&
                }
            </div>
            
        ))
    }
    </>
  )
}

export default AllPosts