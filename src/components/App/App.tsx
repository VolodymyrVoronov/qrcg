import React from "react";

import MainPage from "../../pages/MainPage/MainPage";

import styles from "./App.module.css";

export const App = (): JSX.Element => {
  return (
    <div className={styles.appContainer}>
      <MainPage />
    </div>
  );
};
