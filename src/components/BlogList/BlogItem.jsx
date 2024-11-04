import React, { useState } from 'react'
import PropTypes from "prop-types";
import "../BlogList/BlogItem.css"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


function BlogItem({blog, onRemoveBlog, onUpdateBlog}) {
    const {title, author, id, content, date}= blog
    const [editable,setEditable] =useState(false)
  const [newblog, setnNewblog]=useState(content)

    const removeblog=()=>
      {
       
       onRemoveBlog(id)
      } 


      const updateBlog=()=>
        {
         const request=
         {
          ...blog, // Copy the existing blog object
          content: newblog 
         }
         onUpdateBlog(request)
         setEditable(false)
        }
  return (
    <div className='blog-item'>
        <div className='blog-title'>
           <h3>{title}</h3>
        </div>
        <div className='blog-content'>
        <h3 style={{width:"120px", border:"1px solid #fff", padding:"3px", borderRight:"0px"}}>{author}: </h3>
        { 
                editable ? <input value={  newblog} onChange={(e)=>setnNewblog(e.target.value)} className='update-blog' type="text"/> : content
              }
        </div>
        <div style={{display:"flex",justifyContent:"flex-end", flexDirection:"row", alignItems:"center"}}>
        <MdDelete className='blog-icon' style={{color:'red'}} onClick={removeblog}/>
        {
                editable ? <FaCheck className='blog-icon' onClick={updateBlog} /> : <FaEdit className='blog-icon' style={{color: "blue"}} onClick={()=>setEditable(true)}/>
            }
           <h4>{date}</h4>
        </div>
    </div>
  )
}

export default BlogItem

BlogItem.PropTypes={
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.number,
    content: PropTypes.content,
    date: PropTypes.string
}
