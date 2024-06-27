import React from 'react'

const AllComments = () => {
    
    const [comment, setComment]= React.useState("");
  return (
    <><input onChange={e=>setComment(e.target.value)} /><button> Post</button></>
  )
}

export default AllComments