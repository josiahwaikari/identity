import React, { ReactChild, ReactChildren } from "react";
import { StyleSheet, Text } from "react-native";

const headingSizes: HeadingSizesProps = {
  1: 48,
  2: 40,
  3: 36,
  4: 26,
};

const headingWeights: HeadingWeightsProps = {
  light: "200",
  medium: "400",
  bold: "600",
};

const Heading: React.FC<HeadingProps> = (props) => {
  const text = props.text || props.children;
  const size = props.size || 1;
  const weight = props.weight || "bold";
  const transform = props.transform || undefined;

  return (
    <Text
      style={
        styles({
          fontSize: headingSizes[size],
          fontWeight: headingWeights[weight] as Weights,
          textTransform: transform,
        }).heading
      }
    >
      {text}
    </Text>
  );
};

const styles = (props: HeadingTextProps) =>
  StyleSheet.create({
    heading: {
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      textTransform: props.textTransform,
      color: "#18292D",
    },
  });

type Weights = "200" | "400" | "600";
type Transforms = "none" | "capitalize" | "uppercase" | "lowercase" | undefined;

interface HeadingProps {
  text?: string;
  size?: number;
  weight?: "light" | "medium" | "bold";
  children?: ReactChild | ReactChildren;
  transform?: Transforms;
}

interface HeadingTextProps {
  fontSize: number;
  fontWeight: Weights;
  textTransform: Transforms;
}

interface HeadingSizesProps {
  [headingNumber: number]: number;
}

interface HeadingWeightsProps {
  [headingWeight: string]: string;
}

export default Heading;
