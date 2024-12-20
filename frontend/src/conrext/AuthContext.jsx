import { useState, useContext, createContext,useEffect } from "react";
import AuthService from "../services/auth.service"
import { Cookies } from "react-cookie";

const cookie = new Cookies;
const AuthContext = createContext(null);

const AuthProvider = ({children})=>{
    const [user, setUser] = useState();

    const login = (user) => setUser(user);

    const logout = () =>{
        AuthService.logout();
        setUser(null);
    };

    function getUser(){
        const savedUser = cookie.get("user") || null;
        return savedUser;
    }

    useEffect(()=>{
        cookie.set("user",JSON.stringify(user),
           {
            path: "/",
            expires: new Date(Date.now()+86400),
        });
    },[user]);

    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext =() => useContext(AuthContext);