import React from "react";
import { StyleSheet, View } from "react-native";

interface PageIndicatorProps {
  selected: boolean;
}

export default function PageIndicator(props: PageIndicatorProps) {
  return <View style={styles({ selected: props.selected }).indicator} />;
}

const styles = (props: PageIndicatorProps) =>
  StyleSheet.create({
    indicator: {
      width: props.selected ? 30 : 25,
      height: 5,
      marginRight: 8,
      borderRadius: 10,
      backgroundColor: props.selected ? "#1657FF" : "#d5d9e4",
    },
  });
