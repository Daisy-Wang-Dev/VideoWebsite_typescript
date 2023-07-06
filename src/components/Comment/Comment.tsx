import "./Comment.scss";

interface CommentProps {
    fullName: string;
    readDate: string;
    comment: string
}
function Comment({fullName, readDate, comment}: CommentProps) {
    return (
        <article className="active-comment">
            <div className="active-comment__img"></div>
            <div className="active-comment__text">
                <div  className="active-comment__subtitle">
                    <h3 className="active-comment__name">{fullName}</h3>
                    <h3 className="active-comment__date">{readDate}</h3>
                </div>
                <div className="active-comment__message">{comment}</div>
            </div>        
        </article>
    )
}

export default Comment;