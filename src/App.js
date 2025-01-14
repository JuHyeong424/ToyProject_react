import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import ColorFlipper from "./components/01. Color Flipper";
import Counter from "./components/02. Counter";

function App() {
  return (
      <div id="App">
          <h1 id="Title">PROJECT</h1>

          <ol id="List">
              <li id="Link"><Link to="/ColorFlipper">ColorFlipper</Link></li>
              <li id="Link"><Link to="/Counter">Counter</Link></li>

          </ol>


          <Routes>
              <Route path="/ColorFlipper" element={<ColorFlipper/>}></Route>
              <Route path="/Counter" element={<Counter/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
