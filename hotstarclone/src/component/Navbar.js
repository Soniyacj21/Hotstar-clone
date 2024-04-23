import React from "react";
import logo from "../images/logo.svg";
import search from "../images/search.png";
import home from "..//images/home.png";
import myspace from "../images/myspace.svg";
import tv from "../images/tv.png"

const Navbar = () =>{
    return(  
    <div className='grid grid-cols-2 bg-slate-950 h-screen w-28'>
        
           <img src={logo} className="w-28 ml-5 mt-5"/>
            <img src={myspace} className="w-5 ml-9 mt-8 cursor-pointer"/>
            <img src={home} className="w-5 ml-9 mt-8 cursor-pointer"/>
           < img src={search} className="w-5 ml-9 mt-8 cursor-pointer"/>
            <img src={tv} className="w-5 ml-9 mt-8 cursor-pointer"/>
 

    <div className='z-20 ml-8 w-20 bg-black h-screen front-bold text-base  text-slate-300'>
            <h4 className="mt-20">my space</h4>
            <h4 className="mt-8">home</h4>
            <h4 className="mt-12"> search</h4>
            <h4>Tv</h4>
            
        </div>
        </div>
        
    
     
    )
}
export default Navbar;