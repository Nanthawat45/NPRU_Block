import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

const Create = () => {
  const [postDetail, setPostDetail]= useState({
    title:"",
    summary:"",
    constent:"",
    file:null,
  });
const navigate = useNavigate();
const handleChange = (e) =>{
  // const (name,  value )=e.target;
  // if(name === 'file')
}
  return (
   <div className="min-h-screen flex item-center justify-center p-4">
    <div className="bg-white p-8 rounded-lg max-w-4xl w-full">
      <h2 className="text-2xl font-bold-mb-6 text-center text-gray-800">
        Create New Post
      </h2>
      <div className="mb-4">
        <label htmlFor="" className="block text-gray-700 text-sm font-bold-mb-2">
          Content
        </label>
        <input type="f" />
      </div>
    </div>
   </div>
  )
}

export default Create
