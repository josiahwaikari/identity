import React from "react";
import styled from "styled-components/native";
import QRCode from "react-qr-code";
import ProgressBar from "../../../../components/progress-bar";

const refreshTime = 100;

export default function Identifier() {
  const [value, setValue] = React.useState<number>(1);
  const [progress, setProgress] = React.useState<number>(100);

  React.useEffect(() => {
    const progressInterval = setInterval(async () => {
      if (progress <= 0) {
        setValue((prevValue: number) => prevValue + 1);
        setProgress(100);
      }
      setProgress((prevProgress) => prevProgress - 1);
    }, refreshTime / 100);
    return () => {
      clearInterval(progressInterval);
    };
  }, [progress]);

  return (
    <IdentifierContainer>
      <QRCode value={value.toString()} bgColor="#1657FF" fgColor="#ffffff" />
      <ProgressBarWrapper>
        <ProgressBar progress={progress} colour="#fff" />
      </ProgressBarWrapper>
    </IdentifierContainer>
  );
}

const IdentifierContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const ProgressBarWrapper = styled.View`
  margin-top: 20px;
  width: 256px;
`;
