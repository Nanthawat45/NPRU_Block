import { createBrowserRouter } from "react-router";

import Edit from "../pages/Edit";
import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";
import Create from "../pages/Create";
import Login from "../pages/Login"
import Register from "../pages/Register"
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "edit/:id", element: <Edit /> },
        { path: "create", element: <Create /> },
        { path: "post/:id", element: <PostDetail /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);
  export default router;