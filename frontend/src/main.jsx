import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  router  from "./routes/Router.jsx"
import { RouterProvider } from 'react-router'
import { CookiesProvider } from 'react-cookie'
import {AuthProvider} from "./context/AuthContext.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </CookiesProvider>
  </StrictMode>
)
