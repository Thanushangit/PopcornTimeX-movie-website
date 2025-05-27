import { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { MdMenuOpen, MdClose } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    // Links array to map through
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/toprated", label: "Top Rated" },
        { to: "/popular", label: "Popular" },
        { to: "/upcoming", label: "Upcoming" },
    ];

    // Common className function
    const navLinkClass = ({ isActive }) =>
        `transition-all hover:text-yellow-500 duration-300 ${isActive ? "text-yellow-500" : ""}`;

    const navigate =useNavigate()


    function HandleSubmit(e){
            e.preventDefault();
            const queryTerm=e.target.search.value;
            e.target.reset();
            return navigate(`/search/?q=${queryTerm}`)
    }

    return (
        <div className="bg-black/80 text-gray-200 fixed top-0 left-0 w-full z-50 flex items-center flex-col lg:flex-row">
            <div className="mx:auto py-3 px-3 lg:py-4 lg:px-8 relative flex items-center justify-between w-full">
                {/* Logo */}
                <div className="flex items-center gap-1 text-2xl md:text-3xl">
                    <p className="text-yellow-400"><BiCameraMovie /></p>
                    <h1 className="ibm font-semibold tracking-wide">PopcornTimeX</h1>
                </div>

                {/* Navigation Menu */}
                <div className={`absolute md:static top-0 font-semibold bg-black/80 md:bg-transparent w-full overflow-hidden backdrop-blur-sm duration-300 min-h-[80vh] md:min-h-fit z-50 ${menu ? "left-0" : "left-[-100%]"}`}>
                    <ul className="flex flex-col min-h-[80vh] md:min-h-fit md:flex-row gap-8 items-center justify-center md:justify-end text-xl md:text-md">
                        {navLinks.map(({ to, label }) => (
                            <li key={to} onClick={() => setMenu(false)}>
                                <NavLink to={to} className={navLinkClass}>{label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Toggle Button */}
                <div className="z-50 md:hidden">
                    <p title="menu" className="text-3xl cursor-pointer transition-all duration-300" onClick={() => setMenu(!menu)}>
                        {menu ? <MdClose /> : <MdMenuOpen />}
                    </p>
                </div>
            </div>

            {/* Search Box */}
            <div className="py-3 px-3 lg:py-4 lg:px-8 w-full lg:w-1/3 flex justify-center">
                <form onSubmit={HandleSubmit}>
                    <input
                        type="search"
                        className="bg-gray-300 rounded-full text-gray-700 py-1 px-2 md:py-2 md:px-4 outline-0 w-full md:w-1/2 lg:w-full"
                        placeholder="Search Movie..." name="search"
                    />
                </form>
            </div>
        </div>
    );
};

export default Navbar;
