
import React from 'react';
import Navbar from './component/Navbar.jsx';
import Video from './component/Video.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Watch from './component/Watch.jsx';
import Watchtwo from './component/Watchtwo.jsx';
import { FavoriteProvider } from './component/FavoriteContext';

function App() {
  return (
    <FavoriteProvider>
      <div className="App flex">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Video />} />
            <Route path="/Watch/:id" element={<Watch />} />
            <Route path="/Watchtwo/" element={<Watchtwo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </FavoriteProvider>
  );
}
export default App;
