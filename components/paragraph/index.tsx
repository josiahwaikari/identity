import React, { ReactChild, ReactChildren } from "react";
import { StyleSheet, Text } from "react-native";

export default function Paragraph(props: TextProps) {
  const text = props.text || props.children;
  const color = props.type === "secondary" ? "#ADB4C9" : "#18292D";

  return (
    <Text
      style={
        styles({
          color: color,
          ...props.style,
        }).paragraph
      }
    >
      {text}
    </Text>
  );
}

const styles = (props: any) =>
  StyleSheet.create({
    paragraph: {
      fontSize: 16,
      fontWeight: "600",
      ...props,
    },
  });

interface TextProps {
  text?: string;
  type?: "primary" | "secondary";
  style?: React.CSSProperties;
  children?: ReactChild | ReactChildren;
}
