import '../../style/03_Review.css';
import data from './Review_data';
import {Link} from "react-router-dom";
import {useState} from "react";

const itemsPerPage = 5;  // 페이지당 항목 수

export default function Review() {
    const [reviewBoard, setReviewBoard] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(reviewBoard.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = reviewBoard.slice(startIndex, startIndex + itemsPerPage);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="review">
            <h1 className="review_title">Reviews</h1>
            <Link to="/review_add">
                <button className="review_btn">리뷰 추가하기</button>
            </Link>
            <table className="review_table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>더보기</th>
                    </tr>
                </thead>
                <tbody>
                {
                    currentItems.map((board, index) => (
                        <tr key={index}>
                            <td>{board.글번호}</td>
                            <td>{board.글제목}</td>
                            <td>{board.작성자}</td>
                            <td>{board.작성일}</td>
                            <td>
                                <Link to={`/review_detail/${board.글번호}`}>
                                    <button>더보기</button>
                                </Link>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            {/* 페이지 번호 버튼 */}
            <div className="review_page">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => changePage(index + 1)}
                        style={{ margin: '0 5px', backgroundColor: currentPage === index + 1 ? 'lightgray' : 'white' }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
