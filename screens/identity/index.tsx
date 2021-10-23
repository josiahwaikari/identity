import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Identifier from "./components/identifier";

export default function Identity() {
  return (
    <React.Fragment>
      <IdentifierView>
        <Identifier />
      </IdentifierView>
    </React.Fragment>
  );
}

const IdentifierView = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  background-color: #1657ff;
`;
