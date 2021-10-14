import React from "react";
import { TouchableHighlight, Text } from "react-native";
import { DefaultButtonStyles } from "./styles";

export default function Button(props: any) {
  var [isPress, setIsPress] = React.useState(false);

  const defaultProps = {
    touch: {
      activeOpacity: 1,
      underlayColor: "#fff",
      style: isPress
        ? [DefaultButtonStyles.DefaultButton, DefaultButtonStyles.PressedButton]
        : [DefaultButtonStyles.DefaultButton, DefaultButtonStyles.NormalButton],
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: props.onPress,
    },
    text: {
      style: isPress
        ? DefaultButtonStyles.PressedButtonText
        : DefaultButtonStyles.NormalButtonText,
    },
  };

  switch (props.type) {
    default:
      return (
        <TouchableHighlight {...defaultProps.touch}>
          <Text {...defaultProps.text}>{props.children}</Text>
        </TouchableHighlight>
      );
  }
}
