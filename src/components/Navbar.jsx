import {  NavLink } from "react-router-dom"
import Logo from "../assets/gloves-1.png"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-[40px]">
       
        <div className="img-container flex items-center  text-lg">
            <img src={Logo} alt="" /> 
            <h2 className=" italic bg-emerald-100 logo py-4 px-1"> 
            Boxi<span className="text-emerald-600 ">Lads</span> 
            </h2>
        </div>
        <div className="links flex gap-4 ">
            <nav className="flex items-center gap-8">
                <NavLink to={"/"} className={({isActive}) => `text-gray-800 ${isActive ? "border-b-2 border-teal-800 text-teal-800 font-semibold" : ""}`}>Home</NavLink>
                 {/* <li>
                    <a href="" className="border-b-2 border-teal-800 text-teal-800 font-semibold">Home</a>
                </li> */}
                         <NavLink to={"/registered-gyms"} className={({isActive}) => `text-gray-800 ${isActive ? "border-b-2 border-teal-800 text-teal-800 font-semibold" : ""}`}>Registered Gyms </NavLink>
                         <NavLink to={"/videos"} className={({isActive}) => `text-gray-800 ${isActive ? "border-b-2 border-teal-800 text-teal-800 font-semibold" : ""}`}>Videos</NavLink>
               
            </nav>
            {/* <Link to={"/login"}>
            <button 
            className="bg-emerald-200 py-2 px-6 rounded text-teal-900">login</button>
            </Link> */}
           
       
        </div>
    </div>
  )
}

export default Navbar