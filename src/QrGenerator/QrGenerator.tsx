import React, { ChangeEvent } from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";
import { ColorResult } from "react-color";

import useQrGeneratorStore from "../state/qrGenerator";

import Input from "../components/Input/Input";
import ColorInput from "../components/ColorInput/ColorInput";

import styles from "./QrGenerator.module.css";

const QrGenerator = (): JSX.Element => {
  const { value, size, bgColor, fgColor, setSize, setBgColor, setFgColor } =
    useQrGeneratorStore();

  const onColorBgChange = (color: ColorResult): void => {
    setBgColor(color.hex);
  };

  const onColorFgChange = (color: ColorResult) => {
    setFgColor(color.hex);
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

        <ColorInput
          text="Background color"
          onInputChange={onColorBgChange}
          activeColor={bgColor}
        />

        <ColorInput
          text="QR Code color"
          onInputChange={onColorFgChange}
          activeColor={fgColor}
        />
      </div>

      <div
        className={styles.qrGeneratorCodeBox}
        style={{ width: `${size}` + "px" }}
      >
        <QRCode value={value} size={size} bgColor={bgColor} fgColor={fgColor} />
      </div>
    </motion.div>
  );
};

export default QrGenerator;
