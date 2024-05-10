// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you're importing the correct CSS file
// import '../css/watch.css'




// const MovieCard = ({ title, description, year, rating, posterURL, index, }) => {
//   return (
    // <div className="movie-card">
      
    //   <img src={posterURL} alt={title} />
    //   <div className='card-content'>
    //       <Link to={`/Watch/${index+1}`}>
    //       <button className='card-button'>Watch Now</button>
    //     <button className='card-pbutton'>+</button>
    //     </Link>
    //     <h4 >2024.2h 13m Season.U/A 16+ .Action</h4>
    //     <h5>Arrenaline gets addicted for mumbai based stuntman sidharth! Ready to make a mark in the outlaw competion </h5>
    //     <i className="fas fa-star" style={{ color: 'white' }}></i> {/* Add this line for the star icon */}
  
    //   </div>
    // </div>
//     <div className="movie-card">
//   <img src={posterURL} alt={title} />
//   <div className='card-content'>
//     <Link to={`/Watch/${index+1}`}>
//       <button className='card-button'>Watch Now</button>
//     </Link>
//     <button className='card-pbutton'>+</button>
//     <h4>2024.2h 13m Season.U/A 16+ .Action</h4>
//     <h5>Arrenaline gets addicted for mumbai based stuntman sidharth! Ready to make a mark in the outlaw competion</h5>
//     {/* Add the button for the top right corner with the star icon */}
//     <button className='top-right-button'>
//       <i className="fas fa-star" style={{ color: 'white' }}></i> 
//     </button>
//   </div>
// </div>

//   );
// };
// export default function App() {
//   const [movies, setMovies] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resp = await fetch('https://api.sampleapis.com/movies/drama');
//         const data = await resp.json();
//         setMovies(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleNextButtonClick = () => {
//     setCurrentIndex(prevIndex => prevIndex + 7);
//   };
//   const handlePreviousButtonClick = () => {
//     setCurrentIndex(prevIndex => prevIndex - 7);
//   };
//   return (
//     <div className="movie-list">
//       {movies.slice(currentIndex, currentIndex + 7).map((movie, index) => (
//         <MovieCard
//           key={movie.id}
//           title={movie.title}
//           description={movie.description}
//           year={movie.year}
//           rating={movie.rating}
//           posterURL={movie.posterURL}
//           index={currentIndex + index}
//           // index={index} // Pass index to MovieCard
//         />
//       ))}
//       <div className="slider-buttons">
//         {currentIndex > 0 && (
//           <button className="previous-button" onClick={handlePreviousButtonClick}>
//             {'<'}
//           </button>
//         )}
//         {currentIndex < movies.length - 7 && (
//           <button className="next-button" onClick={handleNextButtonClick}>
//             {'>'}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you're importing the correct CSS file
// import '../css/watch.css';


// const MovieCard = ({ title, description, year, rating, posterURL, index }) => {
//   const [buttonClicked, setButtonClicked] = useState(false);
//   const handleButtonClick = () => {
//     setButtonClicked(!buttonClicked);
//   };
//   const handleStarClick = () => {
//     setButtonClicked(!buttonClicked);
//   };

//   return (
//     <div className="movie-card">
//       <img src={posterURL} alt={title} />
//       <div className='card-content'>
//         <Link to={`/Watch/${index + 1}`}>
//           <button className='card-button'>Watch Now</button>
//         </Link>
//         <button className='card-pbutton'>+</button>
//         <h4>2024.2h 13m Season.U/A 16+ .Action</h4>
//         <h5>Arrenaline gets addicted for mumbai based stuntman sidharth! Ready to make a mark in the outlaw competition</h5>
//         <button className={buttonClicked ? 'top-right-button clicked' : 'top-right-button'} onClick={handleButtonClick}>
//           <i className="fas fa-star" style={{ color: buttonClicked ? 'yellow' : 'white' }}></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function App() {
//   const [movies, setMovies] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resp = await fetch('https://api.sampleapis.com/movies/drama');
//         const data = await resp.json();
//         setMovies(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleNextButtonClick = () => {
//     setCurrentIndex(prevIndex => prevIndex + 7);
//   };

//   const handlePreviousButtonClick = () => {
//     setCurrentIndex(prevIndex => prevIndex - 7);
//   };

//   return (
//     <div className="movie-list">
//       {movies.slice(currentIndex, currentIndex + 7).map((movie, index) => (
//         <MovieCard
//           key={movie.id}
//           title={movie.title}
//           description={movie.description}
//           year={movie.year}
//           rating={movie.rating}
//           posterURL={movie.posterURL}
//           index={currentIndex + index}
//         />
//       ))}
//       <div className="slider-buttons">
//         {currentIndex > 0 && (
//           <button className="previous-button" onClick={handlePreviousButtonClick}>
//             {'<'}
//           </button>
//         )}
//         {currentIndex < movies.length - 7 && (
//           <button className="next-button" onClick={handleNextButtonClick}>
//             {'>'}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you're importing the correct CSS file
// import '../css/watch.css';

// const MovieCard = ({ title, description, year, rating, posterURL, index, onStarClick }) => {
//   const [buttonClicked, setButtonClicked] = useState(false);

//   const handleButtonClick = () => {
//     setButtonClicked(!buttonClicked);
//   };

//   return (
//     <div className="movie-card">
//       <img src={posterURL} alt={title} />
//       <div className='card-content'>
//         <Link to={`/Watch/${index + 1}`}>
//           <button className='card-button'>Watch Now</button>
//         </Link>
//         <button className='card-pbutton'>+</button>
//         <h4>2024.2h 13m Season.U/A 16+ .Action</h4>
//         <h5>Arrenaline gets addicted for mumbai based stuntman sidharth! Ready to make a mark in the outlaw competition</h5>
//         <button className={buttonClicked ? 'top-right-button clicked' : 'top-right-button'} onClick={() => {
//           setButtonClicked(!buttonClicked);
//           onStarClick({ title, description, year, rating, posterURL, index });
//         }}>
//           <i className="fas fa-star" style={{ color: buttonClicked ? 'yellow' : 'white' }}></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function App() {
//   const [movies, setMovies] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resp = await fetch('https://api.sampleapis.com/movies/drama');
//         const data = await resp.json();
//         setMovies(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleNextButtonClick = () => {
//     setCurrentIndex(prevIndex => prevIndex + 7);
//   };

//   const handlePreviousButtonClick = () => {
//     setCurrentIndex(prevIndex => prevIndex - 7);
//   };

//   const handleStarClick = (movie) => {
//     setSelectedMovie(movie);
//     setShowModal(true);
//   };

//   return (
//     <div className="movie-list">
//       {movies.slice(currentIndex, currentIndex + 7).map((movie, index) => (
//         <MovieCard
//           key={movie.id}
//           title={movie.title}
//           description={movie.description}
//           year={movie.year}
//           rating={movie.rating}
//           posterURL={movie.posterURL}
//           index={currentIndex + index}
//           onStarClick={handleStarClick}
//         />
//       ))}
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setShowModal(false)}>&times;</span>
//             <h2>{selectedMovie.title}</h2>
//             <p>{selectedMovie.description}</p>
//             <img src={selectedMovie.posterURL} alt={selectedMovie.title} />
//           </div>
//         </div>
//       )}
//       <div className="slider-buttons">
//         {currentIndex > 0 && (
//           <button className="previous-button" onClick={handlePreviousButtonClick}>
//             {'<'}
//           </button>
//         )}
//         {currentIndex < movies.length - 7 && (
//           <button className="next-button" onClick={handleNextButtonClick}>
//             {'>'}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you're importing the correct CSS file
import '../css/watch.css';

const MovieCard = ({ title, description, year, rating, posterURL, index, onStarClick }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
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
        <button className={buttonClicked ? 'top-right-button clicked' : 'top-right-button'} onClick={() => {
          setButtonClicked(!buttonClicked);
          onStarClick({ title, description, year, rating, posterURL, index });
        }}>
          <i className="fas fa-star" style={{ color: buttonClicked ? 'yellow' : 'white' }}></i>
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
    setSelectedMovies(prevSelectedMovies => [...prevSelectedMovies, movie]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2 className='favotites-head'>Favotites</h2>
            {selectedMovies.map((movie, index) => (
              <div key={index}>
                <h3 className='head-modal'>{movie.title}</h3>
                <p>{movie.description}</p>
                <img src={movie.posterURL} alt={movie.title} />
              </div>
            ))}
          </div>
        </div>
      )}
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

