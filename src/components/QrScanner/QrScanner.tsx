import React, { useState } from "react";
import { QrScanner as ReactQrCodeScanner } from "react-qrcode-scanner";
import { motion } from "framer-motion";

import validURL from "../../helpers/valideURL";

import styles from "./QrScanner.module.css";

const QrScanner = (): JSX.Element => {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [startScan, setStartScan] = useState(false);

  const handleScan = (value: string): void => {
    setQrCodeValue(value);
  };

  const handleError = (error: string): void => {
    console.log({ error });
  };

  const onStartScanButtonClick = (): void => {
    setStartScan(true);
  };

  const qrCodeValueAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  const isQrCodeContainsURL = validURL(qrCodeValue);

  return (
    <>
      {startScan ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.qrScannerResult}>
            {qrCodeValue && isQrCodeContainsURL ? (
              <motion.a
                variants={qrCodeValueAnimation}
                initial="hidden"
                animate="show"
                className={styles.qrScannerResultLink}
                href={qrCodeValue}
                target="_blank"
              >
                {qrCodeValue}
              </motion.a>
            ) : (
              <motion.p
                variants={qrCodeValueAnimation}
                initial="hidden"
                animate="show"
                className={styles.qrScannerResultText}
              >
                {qrCodeValue}
              </motion.p>
            )}
          </div>

          <div className={styles.qrScannerContainer}>
            <ReactQrCodeScanner
              onScan={handleScan}
              onError={handleError}
              video={{ width: "100%", height: "100%" }}
              facingMode="environment"
              flipHorizontally={true}
              className={styles.qrScannerBox}
            />
          </div>
        </motion.div>
      ) : (
        <motion.button
          className={styles.qrScannerStartScanButton}
          onClick={onStartScanButtonClick}
          type="button"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Start
        </motion.button>
      )}
    </>
  );
};

export default QrScanner;
