const data = [
    {글번호 : 1, 글제목: "후기", 글내용: "후기", 작성자: "asdf", 작성일: "2025-01-16"},
];

export default data;

export const addData = (newReview) => {
    newReview.글번호 = data.length + 1;
    newReview.작성일 = new Date().toLocaleDateString();
    data.push(newReview);
}