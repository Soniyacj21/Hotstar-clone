import React, { createContext, useContext, useState } from 'react';

// Create the context
const FavoriteContext = createContext();

// Create a provider component
export const FavoriteProvider = ({ children }) => {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [selectedMovies , setSelectedMovies] = useState([])

  const incrementFavoriteCount = () => {
    setFavoriteCount(prevCount => prevCount + 1);
  };

  const decrementFavoriteCount = () => {
    setFavoriteCount(prevCount => prevCount - 1);
  };

  return (
    <FavoriteContext.Provider value={{ favoriteCount, incrementFavoriteCount, decrementFavoriteCount ,selectedMovies,setSelectedMovies}}>
      {children}
    </FavoriteContext.Provider>
  );
};

// Custom hook to use the FavoriteContext
export const useFavoriteContext = () => {
  return useContext(FavoriteContext);

};

