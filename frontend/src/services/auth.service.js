import api from "./api";
const API_URL = import.meta.env.VITE_BAST_URL +"/auth";

const regisster = async (username, password)=>{
    return await api.post(API_URL+"/register",{username,password});
};

const AuthService = {
    
}