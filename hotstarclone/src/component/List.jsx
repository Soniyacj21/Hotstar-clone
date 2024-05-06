import React, { useEffect, useState } from 'react';
import slider from "../images/slider.svg"

const MovieCard = ({ title, description, year, rating, posterURL }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className='card-content'>
        <button className='card-button'>Watch Now</button>
        <button className='card-pbutton'>+</button>
              <h4 id="li1">2024.2h 13m Season.U/A 16+ .Action</h4>
              <h5>Arrenaline gets addicted for mumbai based stuntman sidharth! Ready to make a mark in the outlaw competion </h5>
           
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
