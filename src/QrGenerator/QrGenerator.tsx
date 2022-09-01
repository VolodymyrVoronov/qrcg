import React, { useEffect } from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

import useImageDownload from "../hooks/useImageDownload";

import useQrGeneratorStore, { QRCodeSize } from "../state/qrGenerator";

import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

import styles from "./QrGenerator.module.css";

const QrGenerator = (): JSX.Element => {
  const { value, size, setSize } = useQrGeneratorStore();

  const [onImageDownload] = useImageDownload();

  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 327) {
      setSize(QRCodeSize.XS);
    }

    if (width >= 375 && width <= 768) {
      setSize(QRCodeSize.SM);
    }

    if (width >= 768 && width <= 1200) {
      setSize(QRCodeSize.MD);
    }

    if (width >= 1200) {
      setSize(QRCodeSize.LG);
    }
  }, [width]);

  useEffect(() => {
    setSize(QRCodeSize.SM);
  }, []);

  const on128ButtonClick = (): void => {
    setSize(QRCodeSize.XS);
  };

  const on256ButtonClick = (): void => {
    setSize(QRCodeSize.SM);
  };

  const on512ButtonClick = (): void => {
    setSize(QRCodeSize.MD);
  };

  const on1024ButtonClick = (): void => {
    setSize(QRCodeSize.LG);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.qrGeneratorContainer}
    >
      <div className={styles.qrGeneratorSettingBox}>
        <Input />

        <div className={styles.qrGeneratorSizeButtonsBox}>
          <Button
            onClick={on128ButtonClick}
            text={"128x128"}
            isActive={QRCodeSize.XS === size}
          />

          <Button
            onClick={on256ButtonClick}
            text={"256x256"}
            isActive={QRCodeSize.SM === size}
          />

          {width > 768 && (
            <Button
              onClick={on512ButtonClick}
              text={"512x512"}
              isActive={QRCodeSize.MD === size}
            />
          )}

          {width > 1200 && (
            <Button
              onClick={on1024ButtonClick}
              text={"1024x1024"}
              isActive={QRCodeSize.LG === size}
            />
          )}
        </div>
      </div>

      <div
        className={styles.qrGeneratorCodeBox}
        style={{ width: `${size}` + "px" }}
      >
        <QRCode id="QRCode" value={value} size={size} />
      </div>

      <Button
        onClick={onImageDownload}
        className={styles.qrGeneratorDownloadButton}
        text={"Download QR Code"}
      />
    </motion.div>
  );
};

export default QrGenerator;
