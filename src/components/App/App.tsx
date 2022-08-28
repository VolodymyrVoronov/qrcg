import React from "react";

import styles from "./App.module.css";

export const App = (): JSX.Element => {
  return (
    <div className={styles.test}>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  );
};
