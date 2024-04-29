
import React,{useState} from "react";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import home from "..//images/home.svg";
import myspace from "../images/myspace.svg";
import tv from "../images/tv.svg"

const Navbar = () => {
    const [touch,setTouch] = useState(false)
    const [isTouch ]= useState(false)
 
    return (
        <div className='grid grid-cols-2 bg-transparent h-screen w-28 fixed z-10 '>
            <div onMouseEnter={()=> setTouch(true)} onMouseLeave={()=> setTouch(false)}  >
 
                <img src={logo} className="w-24 ml-6 mt-6" />
                 <button className="sub">Subscribe     <span>&gt;</span></button>
                <br></br>
                <img src={myspace} className="w-7 ml-9 mt-10 cursor-pointer hover:scale-125" />
                <img src={search} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                <img src={home} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                <img src={tv} className="w-7 ml-9 mt-8 cursor-pointer" />
                
<br></br>
            </div>
 
             {touch && <div className="z-20  mt-4 ml-20 w-28  h-screen font-weight lighter text-base text-slate-300 absolute bg-transparent font-bold overflow-y">
                <div><h4 className="mt-32 mr-10 ">My Space</h4></div>
               <div> <h4 className="mt-9">Search</h4></div>
               <div> <h4 className="mt-10">Home</h4></div>
               <div> <h4 className="mt-7">TV</h4></div>
               
 
            </div> }
          
                
           
            </div>
 
     
    )
}
export default Navbar;
