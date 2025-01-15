import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import ColorFlipper from "./components/01. Color Flipper";
import Counter from "./components/02. Counter";
import Review from "./components/03. Review/03. Review";
import Review_add from "./components/03. Review/Review_add";
import Review_detail from "./components/03. Review/Review_detail";

function App() {
    return (
        <div id="App">
            <h1 id="Title">PROJECT</h1>

            <ol id="List">
                <li id="Link"><Link to="/ColorFlipper">ColorFlipper</Link></li>
                <li id="Link"><Link to="/Counter">Counter</Link></li>
                <li id="Link"><Link to="/Review">Review</Link></li>

            </ol>


            <Routes>
                <Route path="/ColorFlipper" element={<ColorFlipper/>}></Route>
                <Route path="/Counter" element={<Counter/>}></Route>
                <Route path="/Review" element={<Review/>}></Route>
                <Route path="/review_add" element={<Review_add/>}></Route>
                <Route path="/review_detail" element={<Review_detail/>}></Route>
            </Routes>
        </div>
    );
}

export default App;