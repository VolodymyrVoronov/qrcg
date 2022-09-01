import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import SplashScreen from "../../components/SplashScreen/SplashScreen";
import Tabs from "../../components/Tabs/Tabs";
import QrScanner from "../../components/QrScanner/QrScanner";
import QrGenerator from "../../QrGenerator/QrGenerator";

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
      }, 2750);
    }, 2500);

    return () => {
      clearTimeout(timerSplash);
    };
  }, []);

  const tabs = [
    {
      tabId: "tab1",
      tabName: "Create",
      iconSrc: "assets/images/create-icon-01.png",
      render: () => <QrGenerator />,
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
        [styles.mainPageBoxCenter]: !showTabs,
      })}
    >
      <AnimatePresence>
        {showSplashScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
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
      )}
    </div>
  );
};

export default MainPage;
