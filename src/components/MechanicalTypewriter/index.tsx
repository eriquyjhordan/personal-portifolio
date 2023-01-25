import { timeStamp } from "console";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { BlackText, PurpleText } from "./styles";

interface Props {
  text: string;
}

const MechanicalTypewriter: React.FC<Props> = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const animationIndexRef = useRef(0);
  const [erase, setErase] = useState(false);

  const handleAnimation = useCallback((timeStamp: any) => {
    let intervalId: any = null;
    if (!erase) {
      if (animationIndexRef.current < text.length) {
        setCurrentText(currentText + text[animationIndexRef.current]);
        animationIndexRef.current += 1;
        setTimeout(handleAnimation, 100);
      } else {
        setErase(true);
      }
    } else {
      if (animationIndexRef.current > 0) {
        setCurrentText(currentText.slice(0, -1));
        animationIndexRef.current -= 1;
        setTimeout(handleAnimation, 100);
      } else {
        setErase(false);
        animationIndexRef.current = 0;
      }
    }
    return () => cancelAnimationFrame(intervalId);
  }, [currentText, erase, text]);

  useEffect(() => {
    requestAnimationFrame(handleAnimation);
  }, [handleAnimation]);

  const blackText = React.useMemo(() => currentText.substring(0, 2), [currentText]);
  const purpleText = React.useMemo(() => currentText.substring(2), [currentText]);

  return (
    <>
      <BlackText>{blackText}</BlackText>
      <PurpleText>{purpleText}</PurpleText>
    </>
  );
};

export default MechanicalTypewriter;

