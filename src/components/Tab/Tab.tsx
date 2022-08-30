import React, { FC } from "react";
import cn from "classnames";

import { ITabProps } from "./Tab.props";

import styles from "./Tab.module.css";

const Tab: FC<ITabProps> = ({
  tabName,
  isActive,
  iconSrc,
  onClick,
}): JSX.Element => {
  return (
    <button
      className={cn(styles.tabButton, {
        [styles.tabButtonActive]: isActive,
      })}
      onClick={onClick}
      type="button"
    >
      <img className={styles.tabButtonIcon} src={iconSrc} alt={tabName} />
      <p className={styles.tabButtonText}>{tabName}</p>
    </button>
  );
};

export default Tab;
