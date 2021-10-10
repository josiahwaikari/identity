import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Heading from "../../components/heading";
import Paragraph from "../../components/paragraph";
import IdentitySvg from "./assets/identity";
import { Image } from "react-native-svg";

export default function Onboarding() {
  const props = {
    title: "unique identification",
    description:
      "You will be assigned a unique identity which you can use to travel and pay for things with ease.",
    image: <IdentitySvg />,
  };

  return (
    <SafeAreaView>
      <View style={styles.onboardingImageContainer}>{props.image}</View>
      <View style={styles.onboardingInformationContainer}>
        <Heading size={3} weight="bold" transform="capitalize">
          {props.title}
        </Heading>
        <Paragraph
          type="secondary"
          style={styles.onboardingInformationParagraph}
        >
          {props.description}
        </Paragraph>
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  onboardingImageContainer: {
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  onboardingImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  onboardingInformationContainer: {
    margin: 16,
  },
  onboardingInformationParagraph: {
    marginTop: 18,
  },
});
