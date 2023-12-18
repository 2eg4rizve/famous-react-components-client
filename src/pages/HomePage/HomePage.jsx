import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const HomePage = () => {
    return (
        <div>

            <Navbar></Navbar>


            <div className="flex flex-col lg:flex-row px-[20px]" >

                <div className="w-full lg:w-64 min-h-screen bg-blue-300 ">

                    <ul className="p-[10px] ">
                       
                    <li ><NavLink to="/home/tableX"><button >Tabs</button></NavLink> </li>

                    <li ><NavLink to="/home/tableX"><button >Loader</button></NavLink> </li>
                    
                    <li ><NavLink to="/home/tableX"><button >Carousel</button></NavLink> </li>

                    <li ><NavLink to="/home/tableX"><button >Buttons</button></NavLink> </li>


                    <div className="divider"></div>

                    <li><NavLink to="/home/components">Add Component </NavLink></li>

                    <li><NavLink to="/home/title">Add Title  </NavLink></li>

                    </ul>





                </div>

                <div className="flex-1">
                    <Outlet></Outlet>
                </div>

            </div>

        </div>
    );
};

export default HomePage;