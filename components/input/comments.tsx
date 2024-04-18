import { useEffect, useState } from "react";
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

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: CommentData) {
    fetch(`api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  const fetchList = async () => {
    fetch(`api/comments/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComments(data?.comments);
      });
  };

  useEffect(() => {
    if (showComments) {
      fetchList();
    }
  }, [eventId, showComments]);

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
