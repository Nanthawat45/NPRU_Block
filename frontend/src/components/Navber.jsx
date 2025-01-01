import React, { useContext, useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Navber = () => {
  const [user, setUser] = useState(null);
  const { user: savedUser, logout } = useAuthContext();
  useEffect(() => {
    setUser(savedUser);
  }, [savedUser]);
  const handleLogout = () => {
    Swal.fire({
      title: "Logout",
      text: "Do you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Logout",
          text: "Logout successfully!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl" href="/">SE NPRU Blog</a>
    </div>
    <div className="flex gap-2">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      <div className="dropdown dropdown-end">
       
        {/* <ul
          tabIndex={0}
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul> */}
              
      {user ? (
        <>
          <div className="navbar-end space-x-1">
            <a href="/create" className="btn btn-outline btn-secondary">
              Create a new post
            </a>
            <a className="btn btn-outline" onClick={handleLogout}>
              Logout({user.username})
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-end space-x-1">
            <a href="/login" className="btn btn-outline btn-primary">
              Login
            </a>
            <a href="/register" className="btn btn-outline btn-accent">
              Register
            </a>
          </div>
        </>
      )}
      </div>
    </div>
  </div>
  );
};

export default Navber;
