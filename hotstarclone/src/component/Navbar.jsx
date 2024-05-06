
import React,{useState} from "react";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import home from "..//images/home.svg";
import myspace from "../images/myspace.svg";
import tv from "../images/tv.svg"
import movies from "../images/movies.svg" 
import sports from "../images/sports.svg"
import category from "../images/category.svg"

const Navbar = () => {
    const [touch,setTouch] = useState(false)
    const [isTouch ]= useState(false)
 
    return (
      
        <div className='grid grid-cols-2 bg-transparent h-screen w-28 fixed z-10 '>
            <div onMouseEnter={()=> setTouch(true)} onMouseLeave={()=> setTouch(false)}  >
               
                
                 <img src={logo} className="w-24 ml-6 mt-6" />
                 <button className="sub">Subscribe     <span>&gt;</span></button>
                 <br></br>
                 <div className="nav-section">
                   <img src={myspace} className="w-7 ml-9 mt-10 cursor-pointer   " /> 
                   <img src={search} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                   <img src={home} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                   <img src={tv} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                    <img src={movies} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                   <img src={sports} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                   <img src={category} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" /> 

               </div>
                <br></br>
            </div>
            
             {touch && <div className="z-20  -mt-3 ml-20 w-28  h-screen font-weight lighter text-base text-slate-100 absolute bg-transparent font-bold overflow-y">
               <h4 className="mt-40 mr-10  ">My Space</h4>
               
                <h4 className="mt-9">Search</h4>
               <h4 className="mt-10">Home</h4>
                <h4 className="mt-8">TV</h4>
                <h4 className="mt-8">Movies</h4>
                <h4 className="mt-8">Sports</h4>
                <h4 className="mt-8">Category</h4>
               
 
                </div> }
             </div>
            
        
 
     
    )
}
export default Navbar;
