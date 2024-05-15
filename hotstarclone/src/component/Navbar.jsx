import React, { useState } from "react";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import home from "../images/home.svg";
import myspace from "../images/myspace.svg";
import tv from "../images/tv.svg"
import movies from "../images/movies.svg" 
import sports from "../images/sports.svg"
import category from "../images/category.svg"
import love from "../images/love.svg"
import { useFavoriteContext } from "./FavoriteContext"; // context

const Navbar = () => {
    const [touch, setTouch] = useState(false);
    
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    // const { favoriteCount,selectedMovies } = useFavoriteContext();
     //favoriteCount from the context
     const { favoriteCount, selectedMovies, setSelectedMovies, decrementFavoriteCount } = useFavoriteContext();

    const handleOpenClick = () => {
        setShowModal(true); // Open the modal when love icon is clicked

    };
    const handleCloseClick = () => {
        setShowModal(false); // Open the modal when love icon is clicked
        
    };
    const handleStarClick = (movie) => {
      // Remove the selected movie from selectedMovies array
      setSelectedMovies(prevSelectedMovies => prevSelectedMovies.filter(selectedMovie => selectedMovie !== movie));
      // Decrement the favoriteCount when removing a card
      decrementFavoriteCount();
    };
    return (
        <div className='grid grid-cols-2 bg-transparent h-screen w-28 fixed z-10 '>
            <div onMouseEnter={() => setTouch(true)} onMouseLeave={() => setTouch(false)}  >
                <img src={logo} className="w-24 ml-6 mt-6" />
                <button className="sub">Subscribe     <span>&gt;</span></button>
                <br></br>
                <div className="nav-section">
                    <img src={myspace} className="w-7 ml-9 mt-10 cursor-pointer   " /> 
                    <img src={search} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                    <img src={home} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                    <img src={tv} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                    <img src={movies} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                    <img src={sports} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
                    <img src={category} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" /> 
                    <img src={love} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" onClick={handleOpenClick}/> {/* Add onClick event to open modal */}
                    <span className="favorite-count ml-11 text-slate-100 ">{favoriteCount}</span>  
                </div>
                {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseClick}>&times;</span>
              <div className='favorites-head'><h2 >Favorites</h2></div>
              {selectedMovies.map((movie, index) => (
                <div key={index} className="movie-card-modal">
                  <h3 className="head-modal">{movie.title}</h3>
                  <img src={movie.posterURL} alt={movie.title} />
                  <button className="star-icons" onClick={() => handleStarClick(movie)}>
                    <i className="fas fa-star" style={{ color: 'yellow' }}></i>
                  </button>
                </div>
            ))}
          </div>
        </div>
      )}
                <br></br>
            </div>
            {touch && 
                <div className="z-20  -mt-3 ml-20 w-28  h-screen font-weight lighter text-base text-slate-100 absolute bg-transparent font-bold overflow-y">
                    <h4 className="mt-40 mr-10  ">My Space</h4>   
                    <h4 className="mt-9">Search</h4>
                    <h4 className="mt-10">Home</h4>
                    <h4 className="mt-8">TV</h4>
                    <h4 className="mt-8">Movies</h4>
                    <h4 className="mt-9">Sports</h4>
                    <h4 className="mt-9">Category</h4>  
                    <h4 className="mt-9">Favorite</h4>  
                </div>
            }
            
        </div> 
    );
};

export default Navbar;

// import React, { useState } from 'react';
// import logo from '../images/logo.svg';
// import search from '../images/search.svg';
// import home from '../images/home.svg';
// import myspace from '../images/myspace.svg';
// import tv from '../images/tv.svg';
// import movies from '../images/movies.svg';
// import sports from '../images/sports.svg';
// import category from '../images/category.svg';
// import love from '../images/love.svg';
// import { useFavoriteContext } from './FavoriteContext'; // context

// const Navbar = () => {
//   const [touch, setTouch] = useState(false);
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   const { favoriteCount, selectedMovies, setSelectedMovies } = useFavoriteContext(); // favoriteCount from the context

//   const handleOpenClick = () => {
//     setShowModal(true); // Open the modal when love icon is clicked
//   };

//   const handleCloseClick = () => {
//     setShowModal(false); // Close the modal when love icon is clicked
//   };

//   return (
//     <div className="grid grid-cols-2 bg-transparent h-screen w-28 fixed z-10">
//       <div onMouseEnter={() => setTouch(true)} onMouseLeave={() => setTouch(false)}>
//         <img src={logo} className="w-24 ml-6 mt-6" />
//         <button className="sub">
//           Subscribe <span>&gt;</span>
//         </button>
//         <br />
//         <div className="nav-section">
//           <img src={myspace} className="w-7 ml-9 mt-10 cursor-pointer" />
//           <img src={search} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={home} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={tv} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={movies} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={sports} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={category} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={love} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" onClick={handleOpenClick} />
//           <span className="favorite-count ml-11 text-slate-100">{favoriteCount}</span>
//         </div>
//         {/* {showModal && (
//           <div className="modal">
//             <div className="modal-content">
//               <span className="close" onClick={handleCloseClick}>&times;</span>
//               <h2 className="favorites-head">Favorites</h2>
//               {selectedMovies.map((movie, index) => (
//                 <div key={index}>
//                   <h3 className="head-modal">{movie.title}</h3>
//                   <img src={movie.posterURL} alt={movie.title} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )} */}
//         {showModal && (
//   <div className="modal" style={{ zIndex: 10 }}>
//     <div className="modal-content">
//       <span className="close" onClick={handleCloseClick}>&times;</span>
//       <h2 className="favorites-head">Favorites</h2>
//       {selectedMovies.map((movie, index) => (
//         <div key={index} className="movie-card-modal">
//           <h3 className="head-modal">{movie.title}</h3>
//           <img src={movie.posterURL} alt={movie.title} />
//           <button className="star-icon" onClick={() => handleOpenClick(movie)}>
//             <i className="fas fa-star" style={{ color: 'yellow' }}></i>
//           </button>
//         </div>
//       ))}
//     </div>
//   </div>
// )}


//         <br />
//       </div>
//       {touch && 
//         <div className="z-20 -mt-3 ml-20 w-28 h-screen font-weight lighter text-base text-slate-100 absolute bg-transparent font-bold overflow-y">
//           <h4 className="mt-40 mr-10  ">My Space</h4>   
//           <h4 className="mt-9">Search</h4>
//           <h4 className="mt-10">Home</h4>
//           <h4 className="mt-8">TV</h4>
//           <h4 className="mt-8">Movies</h4>
//           <h4 className="mt-9">Sports</h4>
//           <h4 className="mt-9">Category</h4>  
//           <h4 className="mt-9">Favorite</h4>  
//         </div>
//       }
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import logo from '../images/logo.svg';
// import search from '../images/search.svg';
// import home from '../images/home.svg';
// import myspace from '../images/myspace.svg';
// import tv from '../images/tv.svg';
// import movies from '../images/movies.svg';
// import sports from '../images/sports.svg';
// import category from '../images/category.svg';
// import love from '../images/love.svg';
// import { useFavoriteContext } from './FavoriteContext'; // context

// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   const { favoriteCount, selectedMovies, setSelectedMovies } = useFavoriteContext(); // favoriteCount from the context

//   const handleOpenClick = () => {
//     setShowModal(true); // Open the modal when love icon is clicked
//   };

//   const handleCloseClick = () => {
//     setShowModal(false); // Close the modal when love icon is clicked
//   };

//   const handleStarClick = (movie) => {
//     // Remove the selected movie from selectedMovies array
//     setSelectedMovies(prevSelectedMovies => prevSelectedMovies.filter(selectedMovie => selectedMovie !== movie));
//   };

//   return (
//     <div className="grid grid-cols-2 bg-transparent h-screen w-28 fixed z-10">
//       <div>
//         <img src={logo} className="w-24 ml-6 mt-6" />
//         <button className="sub">
//           Subscribe <span>&gt;</span>
//         </button>
//         <br />
//         <div className="nav-section">
//           <img src={myspace} className="w-7 ml-9 mt-10 cursor-pointer" />
//           <img src={search} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={home} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={tv} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={movies} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={sports} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={category} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={love} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" onClick={handleOpenClick} />
//           <span className="favorite-count ml-11 text-slate-100">{favoriteCount}</span>
//         </div>
//         {showModal && (
//           <div className="modal">
//             <div className="modal-content">
//               <span className="close" onClick={handleCloseClick}>&times;</span>
//               <h2 className="favorites-head">Favorites</h2>
//               {selectedMovies.map((movie, index) => (
//                 <div key={index} className="movie-card-modal">
//                   <h3 className="head-modal">{movie.title}</h3>
//                   <img src={movie.posterURL} alt={movie.title} />
//                   <button className="star-icon" onClick={() => handleStarClick(movie)}>
//                     <i className="fas fa-star" style={{ color: 'yellow' }}></i>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         <br />
//       </div>
//       {showModal && 
//         <div className="z-20 -mt-3 ml-20 w-28 h-screen font-weight lighter text-base text-slate-100 absolute bg-transparent font-bold overflow-y">
//           <h4 className="mt-40 mr-10  ">My Space</h4>   
//           <h4 className="mt-9">Search</h4>
//           <h4 className="mt-10">Home</h4>
//           <h4 className="mt-8">TV</h4>
//           <h4 className="mt-8">Movies</h4>
//           <h4 className="mt-9">Sports</h4>
//           <h4 className="mt-9">Category</h4>  
//           <h4 className="mt-9">Favorite</h4>  
//         </div>
//       }
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import logo from '../images/logo.svg';
// import search from '../images/search.svg';
// import home from '../images/home.svg';
// import myspace from '../images/myspace.svg';
// import tv from '../images/tv.svg';
// import movies from '../images/movies.svg';
// import sports from '../images/sports.svg';
// import category from '../images/category.svg';
// import love from '../images/love.svg';
// import { useFavoriteContext } from './FavoriteContext'; // context

// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   const { favoriteCount, selectedMovies, setSelectedMovies, decrementFavoriteCount } = useFavoriteContext(); // favoriteCount from the context

//   const handleOpenClick = () => {
//     setShowModal(true); // Open the modal when love icon is clicked
//   };

//   const handleCloseClick = () => {
//     setShowModal(false); // Close the modal when love icon is clicked
//   };

//   const handleStarClick = (movie) => {
//     // Remove the selected movie from selectedMovies array
//     setSelectedMovies(prevSelectedMovies => prevSelectedMovies.filter(selectedMovie => selectedMovie !== movie));
//     // Decrement the favoriteCount when removing a card
//     decrementFavoriteCount();
//   };

//   return (
//     <div className="grid grid-cols-2 bg-transparent h-screen w-28 fixed z-10">
//       <div>
//         <img src={logo} className="w-24 ml-6 mt-6" />
//         <button className="sub">
//           Subscribe <span>&gt;</span>
//         </button>
//         <br />
//         <div className="nav-section">
//           <img src={myspace} className="w-7 ml-9 mt-10 cursor-pointer" />
//           <img src={search} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={home} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={tv} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={movies} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={sports} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={category} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" />
//           <img src={love} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125" onClick={handleOpenClick} />
//           <span className="favorite-count ml-11 text-slate-100">{favoriteCount}</span>
//         </div>
//         {showModal && (
//           <div className="modal">
//             <div className="modal-content">
//               <span className="close" onClick={handleCloseClick}>&times;</span>
//               <div className='favorites-head'><h2 >Favorites</h2></div>
//               {selectedMovies.map((movie, index) => (
//                 <div key={index} className="movie-card-modal">
//                   <h3 className="head-modal">{movie.title}</h3>
//                   <img src={movie.posterURL} alt={movie.title} />
//                   <button className="star-icons" onClick={() => handleStarClick(movie)}>
//                     <i className="fas fa-star" style={{ color: 'yellow' }}></i>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         <br />
//       </div>
//       {showModal && 
//         <div className="z-20 -mt-3 ml-20 w-28 h-screen font-weight lighter text-base text-slate-100 absolute bg-transparent font-bold overflow-y">
//           <h4 className="mt-40 mr-10  ">My Space</h4>   
//           <h4 className="mt-9">Search</h4>
//           <h4 className="mt-10">Home</h4>
//           <h4 className="mt-8">TV</h4>
//           <h4 className="mt-8">Movies</h4>
//           <h4 className="mt-9">Sports</h4>
//           <h4 className="mt-9">Category</h4>  
//           <h4 className="mt-9">Favorite</h4>  
//         </div>
//       }
//     </div>
//   );
// };

// export default Navbar;
