import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function FetchingData() {
    const [post, setPost] = useState({});
    const [id,setId]=useState('1');
    const[idFromButtonClick,setIdFromtButtonClick]=useState('1');


const handleClick=() =>
{
  setIdFromtButtonClick(id);
}

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res=>{
        console.log(res);
        setPost(res.data)})

     .catch(err=>{
       console.log(err)})
    }, [idFromButtonClick])
    
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
        <button type='button' onClick={handleClick} >Fetch Post</button>
        <div>
            {post.title}
        </div>
    </div>
  )
}

export default FetchingData