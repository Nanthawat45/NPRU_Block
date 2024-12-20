import api from "./api";
import {Cookies} from "react-cookie";
const API_URL = import.meta.env.VITE_BAST_URL +"/auth";

const cookies = new Cookies();
const register = async (username, password)=>{
    return await api.post(API_URL+"/register",{username,password});
};

const login = async (username, password)=>{
    const response = await api.post(API_URL+"/login",{username,password});
    //seve data to cookies
    const {status,data} =response;
    if(response.status === 200){
        if(data.accessToke){
            cookies.set("accessToken", data.accessToke,{path:"/", expires: new Date(Date.now() +86400), //expire date 24h
            });
            cookies.set("user",data);
        }
    }
    return response;
};

const logout = ()=>{
    cookies.remove("accessToken", {path: "/" });
    cookies.remove("user", {path: "/" });
};
const AuthService = {
    register,
    login,
    logout
}
export default AuthService;