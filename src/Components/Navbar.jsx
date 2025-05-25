import { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { MdMenuOpen, MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [menu, setmenu] = useState(false)
    return (
        <div className="bg-black/80 text-gray-200 fixed top-0 left-0 w-full z-50 flex items-center flex-col lg:flex-row ">
            <div className="mx:auto py-3 px-3 lg:py-4 lg:px-8 relative flex items-center justify-between w-full">
                <div className="flex items-center gap-1 text-2xl  md:text-3xl">
                    <p className="text-yellow-400"><BiCameraMovie /></p>
                    <h1 className="ibm font-semibold tracking-wide">PopcornTimeX</h1>
                </div>
                <div className="border-2 border-green-500  w-full">
                    <ul className={` flex  gap-8 items-center justify-center text-lg
                
              `}>
                        <li onClick={() => setmenu(!menu)} ><NavLink to="/">Home</NavLink></li>
                        <li onClick={() => setmenu(!menu)}  ><NavLink to="/top-related">Top Related</NavLink></li>
                        <li onClick={() => setmenu(!menu)} ><NavLink to="/popular">Popular</NavLink></li>
                        <li onClick={() => setmenu(!menu)} ><NavLink to="/upcoming">Upcoming</NavLink></li>
                    </ul>
                </div>


                <div className="z-10 lg:hidden">
                    <p title="menu" className="text-3xl cursor-pointer transition-all duration-300" onClick={() => setmenu(!menu)}>  {menu ? <MdClose /> : <MdMenuOpen />}</p>
                </div>

            </div>

            <div className=" py-3 px-3 lg:py-4 lg:px-8 w-full lg:w-1/3 border-2 border-red-600 flex justify-center">
                <input type="search" className="bg-gray-300 rounded-full text-gray-700 py-1 px-2 md:py-2 md:px-4 outline-0  w-full md:w-1/2 lg:w-full" placeholder="Search Movie..." />
            </div>
        </div>
    )
}

export default Navbar