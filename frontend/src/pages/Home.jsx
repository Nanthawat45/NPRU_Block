import {useState, useEffect } from 'react';
import PostService from "../services/post.sevrvice";
import Swal from 'sweetalert2';
import Post from "../components/Post"

const Home = () => {
      cosnt [PostService, setPosts] =useState([]);
      useEffect(()=>{
        const falsePost = async() =>{
          try{
            const response = await PostService.getPost();
        if (response.status === 200){
          setPosts(response.data);
        }
      }catch (error) {
        Swal.fire({
          title:"Home",
          text:error?.response?.data?.message || error.message,
          icon:"error",
        });
      }
    };
    fetchPosts();
 }, []);
  return (
    <>
      <div className="flex flex-col space-y-6">
        {post.length > 0 &&
        PostService.map((post,index)=>{
          return<Post key={index} {...post}/>;
        })}
      </div>
    </>
  );
}

export default Home