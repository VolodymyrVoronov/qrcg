import React, { FC, Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cn from "classnames";

import { ITabsProps } from "./Tabs.props";

import styles from "./Tabs.module.css";
import Tab from "../Tab/Tab";

const Tabs: FC<ITabsProps> = ({ tabs, className, ...props }): JSX.Element => {
  const [activeTab, setActiveTab] = useState("tab1");

  const onTabButtonClick = (tabId: string): void => {
    setActiveTab(tabId);
  };

  return (
    <div className={cn(styles.tabsContainer, className)} {...props}>
      <div className={styles.tabsButtons}>
        {tabs.map(({ tabId, tabName, iconSrc }) => {
          return (
            <Tab
              key={tabId}
              tabName={tabName}
              iconSrc={iconSrc}
              isActive={tabId === activeTab}
              onClick={(): void => onTabButtonClick(tabId)}
            />
          );
        })}
      </div>

      <div className={styles.tabsContent}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tabs.map(({ tabId, render }) => {
              return (
                <Fragment key={tabId}>
                  {tabId === activeTab && render()}
                </Fragment>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
