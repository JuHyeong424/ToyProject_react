import '../../style/03_ Review.css';
import {Link} from "react-router-dom";

export default function Review_add() {
    return (
        <div className="review_add">
            <h1>Title</h1>
            <p>content</p>
            <Link to="/Review">
                 <button>Complete</button>
            </Link>
        </div>
    );
}