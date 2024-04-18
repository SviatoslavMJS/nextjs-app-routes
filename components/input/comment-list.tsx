import { Comment } from "@/types";

import classes from "./comment-list.module.css";

type CommentsListProps = {
  items?: Comment[];
};

function CommentList({ items }: CommentsListProps): JSX.Element {
  return (
    <ul className={classes.comments}>
      {items?.map(({ text, name, id }) => (
        <li key={id}>
          <p>{text}</p>
          <div>
            By <address>{name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
