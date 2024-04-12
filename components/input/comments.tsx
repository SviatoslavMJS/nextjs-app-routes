import { useState } from "react";
import { Comment } from "@/types";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

type CommentProps = {
  eventId?: string;
};

type CommentData = Omit<Comment, "id">;

function Comments(props: CommentProps) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: CommentData) {
    // send data to API
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}

export default Comments;
