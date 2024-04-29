import React, { useEffect, useState } from 'react';

const MovieCard = ({ title, description, year, rating, posterURL }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      
       
      </div>
  );
};

export default function App() {
  const [movies, setMovies] = useState([]);

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

  return (
<div class="list-head">
 
  <h2 class="list-head">Latest Releases</h2>
    
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
       
        title={movie.title}
        description={movie.description}
        year={movie.year}
        rating={movie.rating}
        posterURL={movie.posterURL}

        
        />
      ))}
    </div></div>
  );
}
