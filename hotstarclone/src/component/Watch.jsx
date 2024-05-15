import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/watch.css'
import '../component/List.jsx'
import List from '../component/List.jsx';

const Watch = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`https://api.sampleapis.com/movies/drama/${id}`);
                const data = await resp.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);
  
    return (
      <>
        <div>
            {movie && (
                <div className='detailedpage'>
                    <img src={movie.posterURL} className='im' alt='' />
                    <div className='content'>
                        <h1 className='title-heading'>{movie.title}</h1>
                        <ul className='paragraph1'>
                            <li id="li1">2024</li>
                            <li>1 Season</li>
                            <li>7 Languages</li>
                            <li>
                                <p id="li4">A</p>
                            </li>
                        </ul>
                        <p className='para2'>NEW EPISODE EVERY FRIDAY. When pirates hijack a ship off the coast off Somalia, a high-stack game is played with innocent lives and a precious piece of cargo abroad.</p>
                        <p className='para3'> Drama |  Action | Thriller | Controversial</p>
                        <div className='buttons'>
                            <div className='watch'>
                                <button className="watch-button2">
                                    <p className="icons1"></p>
                                    <p className="content2">Subscribe to Watch</p>
                                </button>
                            </div>
                            <div>
                                <button className='plus-button1'>
                                    <p className='icon3'>+</p>
                                </button>
                            </div>  
                        </div>
                        {/* <div className='line'></div> Moved line here */}
                    </div>
                   
                </div>
            )}
        </div>
        {/* <div className='dlist'></div> */}
         {/* <div className='detaildlist'> 
         <List/>
     </div> */}
     </>
    );
}

export default Watch;
