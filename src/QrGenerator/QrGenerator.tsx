import React from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";

import useQrGeneratorStore from "../state/qrGenerator";

import styles from "./QrGenerator.module.css";

const QrGenerator = (): JSX.Element => {
  const {
    value,
    size,
    bgColor,
    fgColor,
    setValue,
    setSize,
    setBgColor,
    setFgColor,
  } = useQrGeneratorStore();

  console.log(value);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.qrGeneratorContainer}
    >
      <div className={styles.qrGeneratorCodeBox}>
        <QRCode value={value} size={size} bgColor={bgColor} fgColor={fgColor} />
      </div>
    </motion.div>
  );
};

export default QrGenerator;
