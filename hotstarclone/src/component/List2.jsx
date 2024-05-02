import React, { useEffect, useState } from 'react';
import slider from "../images/slider.svg"

const MovieCard = ({ title, description, year, rating, posterURL }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      
       
      </div>
  );
};

export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentIndex,setCurrentIndex]=useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/family');
        const data = await resp.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleSliderButtonClick =()=>{
    setCurrentIndex(prevIndex=> prevIndex+7);
  };

  return (
<div class="list-head">
 
 
    
    <div className="movie-list2">
     
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
