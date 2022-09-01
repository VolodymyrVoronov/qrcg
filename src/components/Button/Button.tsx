import React, { FC } from "react";
import cn from "classnames";

import { IButtonProps } from "./Button.props";

import styles from "./Button.module.css";

const Button: FC<IButtonProps> = ({
  text,
  isActive,
  className,
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(styles.buttonBox, className, {
        [styles.buttonBoxActive]: isActive,
      })}
      {...props}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
