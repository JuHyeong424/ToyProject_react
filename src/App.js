import styles from './App.module.css';
import {Routes, Route, Link} from "react-router-dom";
import ColorFlipper from "./components/01. Color Flipper";
import Counter from "./components/02. Counter";
import Review from "./components/03. Review";

function App() {
  return (
      <div className={styles.App}>
          <h1 className={styles.Title}>PROJECT</h1>

          <ol className={styles.List}>
              <li className={styles.Link}><Link to="/ColorFlipper" className={styles.link}>ColorFlipper</Link></li>
              <li className={styles.Link}><Link to="/Counter" className={styles.link}>Counter</Link></li>
              <li className={styles.Link}><Link to="/Review" className={styles.link}>Review</Link></li>
          </ol>


          <Routes>
              <Route path="/ColorFlipper" element={<ColorFlipper/>}></Route>
              <Route path="/Counter" element={<Counter/>}></Route>
              <Route path="/Review" element={<Review/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
