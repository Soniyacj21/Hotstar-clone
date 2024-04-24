import React from 'react';
import video from '../video/video.mp4'
import img from '../images/img.webp'

const Video= () =>{
  return (
    <div className='video'>
       
        <video src={video} autoPlay loop muted/>
        <div className='content'>
          <img src={img} className="img1 "/>
          <p className='para1'>2024 . Season . 7 Language</p>
          <p className='para2'>NEW EPISODE EVERY FRIDAY.When pirates hijack a ship off the coast off Somalia, ahigh-stack game is playes with innocentt lives and a precious piece of cargo abroad.</p>
           <button className='button1'> helo</button>
        </div>
       
    </div>
  );
}

 export default Video;