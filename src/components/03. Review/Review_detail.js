import '../../style/03_Review.css';
import { Link, useParams } from "react-router-dom";
import data from './Review_data';

export default function Review_detail() {
    const { id } = useParams();
    const review = data.find((item) => item.글번호 === parseInt(id));

    return (
        <div className="review">
            <Link to="/Review">
                <button className="review_btn_prev">이전</button>
            </Link>
            <h1 className="review_detail_title">{review.글제목}</h1>
            <p className="review_detail"><strong className="review_strong">작성자:</strong> {review.작성자}</p>
            <p className="review_detail"> <strong className="review_strong">작성일:</strong> {review.작성일}</p>
            <p className="review_detail"><strong className="review_strong">내용:</strong> {review.글내용}</p>
        </div>
    );
}
