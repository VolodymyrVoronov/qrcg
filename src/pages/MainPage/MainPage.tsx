import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import SplashScreen from "../../components/SplashScreen/SplashScreen";
import Tabs from "./../../components/Tabs/Tabs";
import QrScanner from "../../components/QrScanner/QrScanner";

import styles from "./MainPage.module.css";

const MainPage = (): JSX.Element => {
  const [showSplashScreen, setShowSplashScreen] = useState(false);
  const [showTabs, setShowTabs] = useState(false);

  useEffect(() => {
    setShowSplashScreen(true);

    const timerSplash = setTimeout(() => {
      setShowSplashScreen(false);

      const timerTabs = setTimeout(() => {
        setShowTabs(true);

        clearTimeout(timerTabs);
      }, 5000);
    }, 5000);

    return () => {
      clearTimeout(timerSplash);
    };
  }, []);

  const tabs = [
    {
      tabId: "tab1",
      tabName: "Create",
      iconSrc: "assets/images/create-icon-01.png",
      render: () => (
        <div>
          Create{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            ullam unde vero est in doloribus doloremque consequuntur rem
            officia. Possimus ex nulla pariatur molestias, suscipit in fuga
            optio provident delectus!
          </p>
        </div>
      ),
    },
    {
      tabId: "tab2",
      tabName: "Scan",
      iconSrc: "assets/images/scan-qr-code-icon-01.png",
      render: () => <QrScanner />,
    },
  ];

  return (
    <div
      className={cn(styles.mainPage, {
        // [styles.mainPageBoxCenter]: !showTabs,
      })}
    >
      <Tabs tabs={tabs} className={styles.mainPageTabs} />

      {/* <AnimatePresence>
        {showSplashScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5 }}
          >
            <SplashScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {showTabs && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
          >
            <Tabs tabs={tabs} className={styles.mainPageTabs} />
          </motion.div>
        </AnimatePresence>
      )} */}
    </div>
  );
};

export default MainPage;
