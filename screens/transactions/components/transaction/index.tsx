import React from "react";
import styled from "styled-components/native";

export default function Transaction(props: any) {
  return (
    <TransactionView>
      <TransactionTitle>{props.name}</TransactionTitle>
      <TransactionAmount>{`$${props.amount}`}</TransactionAmount>
    </TransactionView>
  );
}

const TransactionTitle = styled.Text`
  text-transform: capitalize;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #55585f;
`;

const TransactionAmount = styled(TransactionTitle)`
  margin-left: auto;
`;

const TransactionView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: #888b92;
  border-bottom-width: 1px;
`;
