import React from "react";
import { StyleSheet, View } from "react-native";
import { PageIndicator } from "./components";
import { OnboardingPage } from "../../interfaces";

interface PageIndicatorsProps {
  indiactorPages: OnboardingPage[];
  pageNumber: number;
}

export default function PageIndicators(props: PageIndicatorsProps) {
  return (
    <View style={styles.pageIndicatorsContainer}>
      {props.indiactorPages.map((indicatorPage) => (
        <PageIndicator
          key={indicatorPage.id}
          selected={indicatorPage.id === props.pageNumber}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  pageIndicatorsContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
