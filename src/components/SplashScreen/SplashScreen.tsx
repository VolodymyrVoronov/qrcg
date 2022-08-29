import React from "react";

import styles from "./SplashScreen.module.css";

const SplashScreen = (): JSX.Element => {
  return (
    <div className={styles.splashBox}>
      <div className={styles.splashIconBox}>
        <img
          className={styles.splashIcon}
          src="assets/images/qr-code-icon-01.png"
          alt="qr code icon"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
