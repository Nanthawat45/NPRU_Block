import api from"./api";
const API_URL import.meta.env.VITE_BASE_URL + "/post";

const creatPost = async(post)=>{
    
}
const getPosts = async ()=>{
    return await api.get(API_URL);
};
const PostSevervice = {
    creatPost,
    getPosts,
}