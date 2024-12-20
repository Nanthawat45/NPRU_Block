import { Cookies } from "react-cookie";
const cookies = new Cookies();

const getLocalAccessToken =()=>{
    const user = getUser();
    return user?.accessToken || null;
};

const getUser = ()=>{
    const user = cookies.get("user");
    return user? JSON.parse(user) : null;
};

const removeUser =()=>{
    cookies.remove ("user",{path: "/"});
};

const setUser = (user)=>{
    cookies.set("user", JSON.stringify(user), { // บันทึก User เป็น JSON String
        path: "/",
        expires: new Date(Date.now() + 86400 * 1000), // กำหนดหมดอายุ 24 ชั่วโมง
    });
};

export default {
    getLocalAccessToken,
    getUser,
    removeUser,
    setUser,
};