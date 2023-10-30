import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Main = () => {
    return (
        <div>
            <div>
              <Navbar/>
            </div>
            <Outlet/>

            <Footer></Footer>
        </div>
  
    );
};

export default Main;