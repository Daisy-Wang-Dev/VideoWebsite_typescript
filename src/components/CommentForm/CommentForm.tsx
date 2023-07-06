import "./CommentForm.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/icons/add_comment.svg";

function CommentForm() {
  return (
    <section className="comment-form">
      <img
        className="comment-form__avatar"
        src={Avatar}
        alt="Comment form avatar"
      />
      <div className="comment-form__text">
        <div className="comment-form__comment">
          <h2 className="comment-form__title">JOIN THE CONVERSATION</h2>
          <textarea
            className="comment-form__textarea"
            name="comment"
            id="comment"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <div className="comment-form__post">
          <img
            className="comment-form__icon"
            src={CommentIcon}
            alt="add comment icon"
          />
          <button className="comment-form__btn">COMMENT</button>
        </div>
      </div>
    </section>
  );
}
export default CommentForm;
