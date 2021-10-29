import React from "react";
import styled from "styled-components/native";
import { Platform, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Heading } from "..";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";

export function BackHeader(props: any) {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <BackHeaderView>
        <BackButtonView onPress={navigation.goBack}>
          <Icon name="angle-left" size={36} />
          <BackText>Back</BackText>
        </BackButtonView>
        {props.title && <Heading size={2}>{props.title}</Heading>}
      </BackHeaderView>
      {props.children}
    </React.Fragment>
  );
}

const BackText = styled.Text`
  margin-left: 10px;
`;

const BackButtonView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const BackHeaderView = styled(SafeAreaView)`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: ${Platform.OS === "ios" ? "-20px" : "15px"};
  background-color: #fff;
`;
