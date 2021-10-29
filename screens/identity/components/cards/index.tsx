import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Card from "./components/card";

const cardItems = [
  {
    title: "Transactions",
    screen: "Transactions",
    icon: {
      left: {
        element: "exchange",
        color: "#4ECB71",
      },
      right: {
        element: (
          <Icon
            name="angle-right"
            size={24}
            style={{ color: "#abaec4", marginLeft: "auto" }}
          />
        ),
      },
    },
  },
];

export default function Cards() {
  return (
    <CardsView>
      {cardItems.map((cardItem) => (
        <Card key={cardItem.title} {...cardItem} />
      ))}
    </CardsView>
  );
}

const CardsView = styled.View`
  display: flex;
  justify-content: space-between;
`;
