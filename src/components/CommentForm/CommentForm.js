import "./CommentForm.scss";
import Avatar from "../../assets/images/Mohan-muruge.jpg";

function CommentForm() {
  return (
    <section className="comment-form">
      <img
        className="comment-form__avatar"
        src={Avatar}
        alt="Comment form avatar"
      />
      <div className="comment-form__text">
        <h2>JOIN THE CONVERSATION</h2>
        <textarea
          className="comment-form__textarea"
          name="comment"
          id="comment"
          placeholder="Add a new comment"
        ></textarea>
        <button className="comment-form__btn">COMMENT</button>
      </div>
    </section>
  );
}
export default CommentForm;
