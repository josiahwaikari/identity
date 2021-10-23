import React from "react";
import styled from "styled-components/native";
import QRCode from "react-qr-code";

const refreshTime = 3000;

export default function Identifier() {
  const [value, setValue] = React.useState<number>(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue: number) => prevValue + 1);
    }, refreshTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <IdentifierContainer>
      <QRCode value={value.toString()} bgColor="#1657ff" fgColor="#fff" />
    </IdentifierContainer>
  );
}

const IdentifierContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: #1657ff;
`;
