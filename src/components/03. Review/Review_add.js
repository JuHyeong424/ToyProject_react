import '../../style/03_Review.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import {addData} from "./Review_data";

export default function Review_add() {
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');

    const enroll = () => {
        if (!title.trim() || !writer.trim() || !content.trim()) {
            alert("내용을 입력하세요.")
        } else {
                const newReview = {
                    글제목: title,
                    글내용: content,
                    작성자: writer,
                };
                addData(newReview);
        }
    }

    return (
        <div className="review">
            <h1 className="review_add_title">리뷰 추가하기</h1>
            <table className="review_enroll">
                <thead>
                <tr>
                    <th>제목</th>
                    <td>
                        <input type="text" className="review_title" onChange={(e) => {
                            setTitle(e.target.value);
                        }}/>
                    </td>
                </tr>
            </thead>
                <tbody>
                <tr>
                    <th>작성자</th>
                    <td>
                        <input type="text" className="review_writer" onChange={(e) => {
                            setWriter(e.target.value);
                        }}/>
                    </td>
                </tr>
                <tr>
                    <th>글내용</th>
                    <td>
                        <textarea className="review_content" onChange={(e) => {
                            setContent(e.target.value);
                        }}/>
                    </td>
                </tr>
                </tbody>
            </table>
            <Link to="/Review">
                <div className="review_btn_complete">
                    <button onClick={enroll}>Complete</button>
                </div>
            </Link>
        </div>
    );
}
