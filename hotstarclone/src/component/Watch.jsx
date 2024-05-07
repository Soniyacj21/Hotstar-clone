import React from 'react';
import video from '../video/looo.mp4'
const Watch= () =>{
  return (
        <div className='video'>
        <video src={video} autoPlay loop muted/>
       </div>
  );
}
 export default Watch;