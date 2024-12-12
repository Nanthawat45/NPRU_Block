import { Outlet } from "react-router"
import Navber from "./Navber"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div>
        <header>
            <Navber/>
        </header>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout