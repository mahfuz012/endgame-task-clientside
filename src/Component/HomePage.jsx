import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footerbox from "../Sharefiles/Footerbox";


const HomePage = () => {
    return (
        <div className="p-2">
            <Navbar />
            <div className="outlineSpace">
            <Outlet />
            </div>
             <div>
                <Footerbox />
             </div>



        </div>
    );
};

export default HomePage;