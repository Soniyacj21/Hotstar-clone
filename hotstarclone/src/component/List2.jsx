import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const MovieCard = ({ title, description, year, rating, posterURL,index }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className='card-content'>
        <Link to="/Watch">
          <button className='card-button'>Watch Now</button>
        </Link>
        <button className='card-pbutton'>+</button>
        <h4 id={`li${index}`}>2024.2h 13m Season.U/A 16+ .Action</h4>
        <h5>Arrenaline gets addicted for mumbai based stuntman sidharth! Ready to make a mark in the outlaw competion </h5>
      </div>

    </div>
  );
};
export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
  const handleSliderButtonClick = () => {
    setCurrentIndex(prevIndex => prevIndex + 7);
  };
  return (
    <div class="list-head">
      <div className="movie-list2">
        {movies.slice(currentIndex, currentIndex + 7).map(movie => (
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
      {currentIndex + 7 < movies.length && (
        <button className='=slider-button' onClick={handleSliderButtonClick}>
        </button>
      )}
    </div>
  );
}
