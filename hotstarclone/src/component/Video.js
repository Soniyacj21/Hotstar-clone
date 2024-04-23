import React from 'react';
import video from '../video/video.mp4'

const Video= () =>{
  return (
    <div className='video'>
        <div className='overlay'></div>
        <video src={video} autoPlay loop muted/>
        <div className='content'>
            <h3>hii</h3>
        </div>
    </div>
  );
}

export default Video;