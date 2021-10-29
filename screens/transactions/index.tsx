import React from "react";
import styled from "styled-components/native";
import { BackHeader } from "../../components/headers";
import TransactionGroup from "./components/transaction-group";
import Transaction from "./components/transaction";

const transactions = {
  "2021-10-23T11:00:00.000Z": [
    {
      id: "e61aaa4958e84fcd87a7347d8b9ac7cd",
      name: "Hobart Street at Broadway",
      amount: "2.81",
    },
  ],
  "2021-10-22T11:00:00.000Z": [
    {
      id: "93e85f88ca7f4b4bab6fe3de96ccb7c6",
      name: "Hobart Street at Broadway",
      amount: "2.81",
    },
    {
      id: "4e8e188d50aa413fa16160e40eba52f5",
      name: "Hobart Street at Broadway",
      amount: "2.81",
    },
  ],
  "2021-10-21T11:00:00.000Z": [
    {
      id: "e012dfd391f44b1c8b6c0e1f47f22994",
      name: "Elizabeth Street (near 7)",
      amount: "3.80",
    },
    {
      id: "da4d136944864384962292ff2c98927a",
      name: "Hobart Street at Broadway",
      amount: "2.81",
    },
    {
      id: "2835b3b7fe344ac686ec021d782bbc6b",
      name: "Manners Street at Cuba Street",
      amount: "2.85",
    },
  ],
};

export default function Transactions() {
  return (
    <BackHeader title="Transactions">
      <TransactionsView>
        {Object.entries(transactions).map(([key, value]) => (
          <TransactionGroup key={key} label={key}>
            {value.map((item) => (
              <Transaction key={item.id} {...item} />
            ))}
          </TransactionGroup>
        ))}
      </TransactionsView>
    </BackHeader>
  );
}

const TransactionsView = styled.View`
  margin-left: 20px;
  margin-right: 20px;
`;
