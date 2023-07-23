import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const HomePage = () => {
    return (
        <div className="p-2">
            <Navbar />
            <div className="outlineSpace">
            <Outlet />
            </div>




        </div>
    );
};

export default HomePage;