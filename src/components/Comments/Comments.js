import "./Comments.scss";
import Comment from "../Comment/Comment";

function Comments({ activeComments }) {
  return (
    <section className="comments">
      {activeComments.map((activeComment) => {
        // const date = new Date(activeComment.timestamp);
        // const month = date.toLocaleString("default", { month: "2-digit" });
        // const day = date.toLocaleString("default", { day: "2-digit" });
        // const year = date.getFullYear();
        // const readDate = `${day}/${month}/${year}`;
        // {console.log(activeComment.id);}
        // console.log(activeComment.name);
        // console.log(activeComment.timestamp);
        // console.log(activeComment.comment);

        <Comment
          key={activeComment.id}
          fullName={activeComment.name}
          readDate={activeComment.timestamp}
          comment={activeComment.comment}
        />;
      })}
    </section>
  );
}

export default Comments;
