import { PropsWithChildren } from "react";

import classes from "./logistics-item.module.css";

type LogisticItemProps = PropsWithChildren<{ icon: JSX.Element }>;

function LogisticsItem(props: LogisticItemProps) {
  const { icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
