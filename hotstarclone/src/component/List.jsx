import React, { useEffect, useState } from 'react';
import slider from "../images/slider.svg"

const MovieCard = ({ title, description, year, rating, posterURL }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className='card-content'>
        <button className='card-content'>Watch Now</button>
        {/* <ul className='para1'>
              <li id="li1">2024 </li>
            <li>1 Season</li>
            <li> 7 Languages</li>
            <li>
              <p id="li4">A</p>
            </li>
            </ul>   */}
        </div>
        </div>   
  );
};

export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentIndex,setCurrentIndex]=useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/drama');
        const data = await resp.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleSliderButtonClick =()=>{
    setCurrentIndex(prevIndex=> prevIndex+6);
  };

  return (
<div class="list-head">   
    <div className="movie-list"> 
      {movies.slice(currentIndex,currentIndex+7).map(movie => (
        <MovieCard
         key={movie.id}
        title={movie.title}
        description={movie.description}
        year={movie.year}
        rating={movie.rating}
        posterURL={movie.posterURL}

        
        />
      ))}
    </div>
    {currentIndex + 7 <movies.length&&(
      <button className='=slider-button' onClick={handleSliderButtonClick}>
      </button>
    )}
    </div>
  );
}
