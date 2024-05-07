import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const MovieCard = ({ title, description, year, rating, posterURL, index }) => {
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
        const resp = await fetch('https://api.sampleapis.com/movies/drama');
        const data = await resp.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleNextButtonClick = () => {
    setCurrentIndex(prevIndex => prevIndex + 7);
  };
  const handlePreviousButtonClick = () => {
    setCurrentIndex(prevIndex => prevIndex - 7);
  };
  return (
    <div className="movie-list">
      {movies.slice(currentIndex, currentIndex + 7).map((movie, index) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          year={movie.year}
          rating={movie.rating}
          posterURL={movie.posterURL}
          index={index} // Pass index to MovieCard
        />
      ))}
      <div className="slider-buttons">
        {currentIndex > 0 && (
          <button className="previous-button" onClick={handlePreviousButtonClick}>
            {'<'}
          </button>
        )}
        {currentIndex < movies.length - 7 && (
          <button className="next-button" onClick={handleNextButtonClick}>
            {'>'}
          </button>
        )}
      </div>
    </div>
  );
}
