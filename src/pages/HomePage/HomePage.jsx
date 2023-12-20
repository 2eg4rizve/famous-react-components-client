/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Link, NavLink, Outlet } from "react-router-dom";

import useTitle from "../../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../components/Navbar/Navbar";


const HomePage = () => {

    const { currentTitle, setCurrentTitle } = useContext(AuthContext);

    const [refetch, title, isLoading] = useTitle();


    if (isLoading) {
        return <p>Loading ..................</p>
    }

    return (
        <div>

            <Navbar></Navbar>


            <div className="flex flex-col lg:flex-row px-[20px]" >

                <div className="w-full lg:w-64 min-h-screen bg-blue-300 ">

                    <ul className="p-[10px] ">


                        {/* <li  style={{ background: currentLevel == "level1"? "red" : "" }}><NavLink to="/level/levelX"><button onClick={()=>setCurrentLevel("level1")}>Level - 1</button></NavLink> </li> */}


                        {/* <li style={{ background: currentTitle == "Table" ? "red" : "" }}><NavLink to="/home/tableX"><button onClick={() => setCurrentTitle("Table")} >Table</button></NavLink> </li>

                        <li style={{ background: currentTitle == "Notification" ? "red" : "" }}><NavLink to="/home/tableX"><button onClick={() => setCurrentTitle("Notification")} >Notification</button></NavLink> </li> */}

                        {/* 
                        <li style={{ background: currentTitle == "Table"? "red" : "" }}><NavLink to="/home/tableX"><button  onClick={() => setCurrentTitle("Table")} >Table</button></NavLink> </li> */}


                        {/* <li ><NavLink to="/home/tableX"><button >Carousel</button></NavLink> </li>

                        <li ><NavLink to="/home/tableX"><button >Buttons</button></NavLink> </li> */}
                        {/* <p>..............</p> */}

                        {

                            //title?.map(item => <li ><Link ><button >{item.titleName}</button></Link> </li>)

                             title?.map(item => <li style={{ background: currentTitle == item.titleName ? "red" : "" }}><NavLink to="/home/tableX"><button onClick={() => setCurrentTitle(item.titleName)}>{item.titleName}</button></NavLink> </li>)

                        }


                        <div className="divider"></div>

                        <li><NavLink to="/home/components">Add Components </NavLink></li>

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