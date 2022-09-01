import React, { ChangeEvent, FC } from "react";
import cn from "classnames";

import useQrGeneratorStore from "../../state/qrGenerator";

import { IInputProps } from "./Input.props";

import styles from "./Input.module.css";

const Input: FC<IInputProps> = ({ className, ...props }): JSX.Element => {
  const { value, setValue } = useQrGeneratorStore();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div className={cn(styles.inputContainer, className)} {...props}>
      <input
        type="text"
        value={value}
        onChange={(e) => onInputChange(e)}
        className={styles.inputField}
        placeholder="URL"
        autoFocus
      />
    </div>
  );
};

export default Input;
