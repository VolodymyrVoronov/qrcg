import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import SplashScreen from "../../components/SplashScreen/SplashScreen";

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
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              itaque debitis, labore repellendus in ipsa doloremque quaerat! Ea
              quas blanditiis, amet veritatis veniam asperiores quae iusto et
              pariatur quo! Provident!
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default MainPage;
