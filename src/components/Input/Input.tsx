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
      <p className={styles.inputTip}>URL</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onInputChange(e)}
        className={styles.inputField}
        placeholder="Hi there!"
      />
    </div>
  );
};

export default Input;
