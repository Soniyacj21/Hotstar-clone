import React from 'react';
import video from '../video/looo.mp4'
import img from '../images/img.webp'
import List from '../component/List.jsx'
import List2 from '../component/List2.jsx'
import playstore from '../images/playstore.webp'
import appstore from '../images/appstore.webp'
import SliderComponent  from '../component/List3.jsx'

const Video= () =>{
  return (
    
        <div className='main-container'style={{ background: 'linear-gradient(to top, #000000 55%, transparent 100% ,transparent 100%)',zIndex:2 }}>
        <div className='overlay-g'>
        <div className='video'  >
          

        <video src={video} autoPlay loop muted/>
        </div>
        </div>
        <div className='container'>
        <div className='content'>
          <img src={img} className="img1 "/>
          <ul className='para1'>
            <li id="li1">2024 </li>
            <li>1 Season</li>
            <li> 7 Languages</li>
            <li>
              <p id="li4">A</p>
            </li>
            </ul>
          <p className='para2'>NEW EPISODE EVERY FRIDAY.When pirates hijack a ship off the coast off Somalia, ahigh-stack game is playes with innocentt lives and a precious piece of cargo abroad.</p>
          <p className='para3'> Drama |  Action | Thriller | Controversial</p>
          <div className='buttons'>
          <div className='watch'> <button className="watch-button">
           <p className="icon"></p>
           <p className="content1">Subscribe to Watch</p></button>
          </div>
          <div><button className='plus-button'>
            <p className='icon2'>+</p>
            </button></div>  
            </div>
            <div className='list-head'>  
            <p className='list-head1'>Latest Releases</p> 
            <p className='list-head2'>View All</p>  
            </div>
        
            
             <h3 className='company'>Company</h3>
             <h3 className='aboutus'>About Us</h3>
             <h3 className='careers'>Careers</h3>
             <img src={playstore} className="playstore "/>
             <img src={appstore} className="appstore "/>
             <List/>
             <List2/>
             <SliderComponent/>
           </div>   
          </div>
</div>   
       
  );
}
 export default Video;