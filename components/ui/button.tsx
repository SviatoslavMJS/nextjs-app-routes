import Link from "next/link";

import classes from "./button.module.css";
import { PropsWithChildren } from "react";

type ButtonProps = {
  link?: string;
  onClick?: () => void;
};

function Button(props: PropsWithChildren<ButtonProps>) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
