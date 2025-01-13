import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import ColorFlipper from "./components/01. Color Flipper";

function App() {
  return (
      <div className="App">
          <h1 className="Title">PROJECT</h1>
          <div className="List">
              <h2 className="Link"><Link to="/ColorFlipper">ColorFlipper</Link></h2>


          </div>

          <Routes>
              <Route path="/ColorFlipper" element={<ColorFlipper/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
