// import React from 'react';
// import img2 from '../images/black.webp'
// import img3 from '../images/black-panther.webp'
// import   '../css/watch.css'

// const Watch= () =>{
  
//   return (
   
//     <div className='bg-image'>
//       <img src={img3} className="img3 "/>
     
//     <div className='content'>
//           <img src={img2} className="img2 " />
//           <ul className='paragraph1'>
//             <li id="li1">2024 </li>
//             <li>1 Season</li>
//             <li> 7 Languages</li>
//             <li>
//               <p id="li4">A</p>
//             </li>
//             </ul>
//           <p className='para2'>NEW EPISODE EVERY FRIDAY.When pirates hijack a ship off the coast off Somalia, ahigh-stack game is playes with innocentt lives and a precious piece of cargo abroad.</p>
//           <p className='para3'> Drama |  Action | Thriller | Controversial</p>
//           <div className='buttons'>
//           <div className='watch'> <button className="watch-button2">
//            <p className="icons1"></p>
//            <p className="content2">Subscribe to Watch</p></button>
//           </div>
//           <div><button className='plus-button1'>
//             <p className='icon3'>+</p>
//             </button></div>  
//             </div>
//    </div>
//    </div>
//   );
// }
//  export default Watch;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/watch.css'

const Watch= () =>{
    const [movies, setMovies] = useState([]);
    const {id} = useParams();
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const resp = await fetch(`https://api.sampleapis.com/movies/drama/${id}`);
          const data = await resp.json();
          setMovies(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [id]);
  
  return (
    
          <div  >
          

        {movies && <img src={movies.posterURL} className='im' alt='' />
}
<div className='content'>
          
          <ul className='paragraph1'>
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
          <div className='watch'> <button className="watch-button2">
           <p className="icons1"></p>
           <p className="content2">Subscribe to Watch</p></button>
          </div>
          <div><button className='plus-button1'>
            <p className='icon3'>+</p>
            </button></div>  
            </div>
   </div>
       
        </div>
      
  );
}
 export default Watch;