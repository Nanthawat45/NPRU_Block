import React, { useState } from 'react'
import AuthService from "../services/auth.service"
import { useNavigate } from 'react-router'

const Register = () => {
  const navigate = useNavigate();
  const[user,setUser]=useState({
    username:"",
    password:"",
  });

  const handleSubmit = async () =>{
    try {
      const currentUser = await AuthService.register(
        user.username, 
        user.password
      );
      console.log(currentUser.status);
      if(currentUser.status === 200){
        Swal.fire({
          title:"User Registration",
          text:currentUser.data.message,
          icon:"success"
        });
        setUser({
          username:"",
          password:"",
        })
        navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        title: "User Registration",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
  }
};

  return (
    <div>Register</div>
  )
}

export default Register