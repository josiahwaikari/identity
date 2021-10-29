import React from "react";
import styled from "styled-components/native";
import { getDateText } from "../../../../helper";

export default function TransactionGroup(props: any) {
  return (
    <TransactionGroupView>
      <TransactionLabel>{getDateText(props.label)}</TransactionLabel>
      <TransactionSeparator />
      {props.children}
    </TransactionGroupView>
  );
}

const TransactionLabel = styled.Text`
  font-size: 10px;
  color: #1657ff;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const TransactionSeparator = styled.View`
  border-color: #888b92;
  border-bottom-width: 1px;
`;

const TransactionGroupView = styled.View`
  margin-top: 24px;
`;
