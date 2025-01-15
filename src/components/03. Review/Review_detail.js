import '../../style/03_ Review.css';
import {Link} from "react-router-dom";

export default function Review_detail() {
    return (
        <div className="review_detail">
            <h1>Title</h1>
            <p id="review_content">content</p>
            <Link to="/Review">
                <button>이전</button>
            </Link>
        </div>
    );
}