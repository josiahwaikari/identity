import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Heading, Paragraph } from "../../../../../../components";
import { adjust } from "../../../../../../helper";
import { useNavigation } from "@react-navigation/core";

export default function Card(props: any) {
  const navigation = useNavigation();

  return (
    <CardView
      style={{
        shadowColor: "#470000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 1,
      }}
      onPress={() => navigation.navigate(props.screen)}
    >
      {props.icon?.left && (
        <IconWrapper color={props.icon.left.color}>
          <Icon
            name={props.icon.left.element}
            size={24}
            style={{ color: props.icon.left.color }}
          />
        </IconWrapper>
      )}
      <StyledCardContentWrapper>
        <Heading size={5} weight="bold">
          {props.title}
        </Heading>
        {props.subtitle && (
          <Paragraph type="secondary" style={{ fontSize: 14 }}>
            {props.subtitle}
          </Paragraph>
        )}
      </StyledCardContentWrapper>
      {props.icon?.right?.element}
    </CardView>
  );
}

const StyledCardContentWrapper = styled.View`
  display: flex;
  margin-left: 25px;
`;

const IconWrapper = styled.View<{ color: string }>`
  display: flex;
  background-color: ${(props) => adjust(props.color, 120)};
  justify-content: center;
  align-items: center;
  border-radius: ${40 / 2}px;
  width: 40px;
  height: 40px;
`;

const CardView = styled.TouchableOpacity`
  display: flex;
  background-color: #fff;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 10px;
  padding: 16px;
`;
