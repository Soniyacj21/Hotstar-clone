import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'; // CSS file
import '../css/watch.css';
import { FavoriteProvider, useFavoriteContext } from './FavoriteContext'; 

const MovieCard = ({ title, description, year, rating, posterURL, index, onStarClick }) => {
  const { incrementFavoriteCount, decrementFavoriteCount, favoriteCount , selectedMovies,setSelectedMovies} = useFavoriteContext(); // Use useFavoriteContext instead of FavoriteContext
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStarClick = () => {
    if (buttonClicked) {
      decrementFavoriteCount(); // Decrease count if already favorited
    } else {
      incrementFavoriteCount(); // Increase count if not favorited
    }
    onStarClick({ title, description, year, rating, posterURL, index, isFavorite: buttonClicked });
    setButtonClicked(!buttonClicked);
  };

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className='card-content'>
        <Link to={`/Watch/${index + 1}`}>
          <button className='card-button'>Watch Now</button>
        </Link>
        <button className='card-pbutton'>+</button>
        <h4>2024.2h 13m Season.U/A 16+ .Action</h4>
        <h5>Arrenaline gets addicted for mumbai based stuntman sidharth! Ready to make a mark in the outlaw competition</h5>
        <button className={buttonClicked ? 'top-right-button clicked' : 'top-right-button'} onClick={handleStarClick}>
          <i className="fas fa-star" style={{ color: buttonClicked ? 'yellow' : 'white' }}></i>
        </button>
      </div>
    </div>
  );
};

const List = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const { favoriteCount ,selectedMovies,setSelectedMovies} = useFavoriteContext(); // Use useFavoriteContext instead of FavoriteContext

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

  const handleStarClick = (movie) => {
    if (movie.isFavorite) {
      setSelectedMovies(prevSelectedMovies => prevSelectedMovies.filter((selectedMovie) => selectedMovie.index !== movie.index));
    } else {
      setSelectedMovies(prevSelectedMovies => [...prevSelectedMovies, movie]);
      
    }
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
          index={currentIndex + index}
          onStarClick={handleStarClick}
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
};

export default List;
