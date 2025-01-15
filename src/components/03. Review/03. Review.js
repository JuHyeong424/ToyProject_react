import '../../style/03_ Review.css';
import {Link} from "react-router-dom";

export default function Review() {
    return (
      <div id="review">
        <h1 id="reviews">Reviews</h1>
          <div id="review_board">
              <Link to="/review_detail">
                    <h2 id="review_title">Title</h2>
              </Link>
          </div>
          <Link to="/review_add">
              <button id="review_btn">리뷰 추가하기</button>
          </Link>
      </div>
    );
}