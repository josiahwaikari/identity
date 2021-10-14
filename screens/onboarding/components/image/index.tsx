import React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";

interface ImageProps {
  image: ImageSourcePropType;
}

export default function Image(props: ImageProps) {
  return (
    <OnboardingImageContainer>
      <OnboardingImage source={props.image} resizeMode="contain" />
    </OnboardingImageContainer>
  );
}

const OnboardingImage = styled.Image`
  align-self: center;
  width: 100%;
  height: 100%;
`;

const OnboardingImageContainer = styled.View`
  height: 300px;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`;
