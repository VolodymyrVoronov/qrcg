import React, { FC } from "react";
import cn from "classnames";

import Paths from "../../const/paths";

import MainPage from "../../pages/MainPage/MainPage";

import { IAppProps } from "./App.props";

import styles from "./App.module.css";

export const App: FC<IAppProps> = ({
  className,
  children,
  ...props
}): JSX.Element => {
  return (
    <div className={cn(styles.appContainer, className)} {...props}>
      <MainPage />
    </div>
  );
};
