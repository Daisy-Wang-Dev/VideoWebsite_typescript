import "./Comments.scss";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";


function Comments({ activeComments }) {
  return (
    <section className="comments">
        
        <h2 className="comments__title">{activeComments.length} Comments</h2>
        <CommentForm/>
      {activeComments.map((activeComment) => {
        const date = new Date(activeComment.timestamp);
        const month = date.toLocaleString("default", { month: "2-digit" });
        const day = date.toLocaleString("default", { day: "2-digit" });
        const year = date.getFullYear();
        const readDate = `${day}/${month}/${year}`;
   

       return <Comment
          key={activeComment.id}
          fullName={activeComment.name}
          readDate={readDate}
          comment={activeComment.comment}
        />;
      })}
    </section>
  );
}

export default Comments;
