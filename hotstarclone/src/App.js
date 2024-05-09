// import Navbar from "./component/Navbar.jsx";
//  import Video from "./component/Video.jsx";
//  import { BrowserRouter, Routes, Route} from 'react-router-dom';
//  import Watch from './component/Watch.jsx'
// function App() {
//   return (
//     <div className="App flex">  
//     <BrowserRouter>
//              <Navbar/> 
//              <Video/> 
//              <Routes>
//              <Route path="/Watch" element={<Watch/>}/>
//              </Routes>
//              </BrowserRouter>
//         </div>
//   );
// }
// export default App;
import Navbar from "./component/Navbar.jsx";
import Video from "./component/Video.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Watch from './component/Watch.jsx';
import Watchtwo from './component/Watchtwo.jsx';




function App() {
  return (
    <div className="App flex">  
      <BrowserRouter>
        <Navbar/> 
        
        <Routes>
        <Route path="/" element={<Video/>}/>
          <Route path="/Watch/:id" element={<Watch/>}/>
          <Route path="/Watchtwo/" element={<Watchtwo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
