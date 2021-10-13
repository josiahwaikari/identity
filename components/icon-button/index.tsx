import React from "react";
import { TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CircleButtonStyles } from "./styles";

export default function IconButton(props: any) {
  var [isPress, setIsPress] = React.useState(false);

  const circleProps = {
    touch: {
      activeOpacity: 1,
      underlayColor: "#fff",
      style: isPress
        ? [
            CircleButtonStyles.DefaultCircleButton,
            CircleButtonStyles.PressedCircleButton,
          ]
        : [
            CircleButtonStyles.DefaultCircleButton,
            CircleButtonStyles.NormalCircleButton,
          ],
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: props.onPress,
    },
    icon: {
      style: isPress
        ? [CircleButtonStyles.PressedButtonIcon]
        : [CircleButtonStyles.NormalButtonIcon],
    },
  };

  const iconSize = props.iconSize || 32;

  switch (props.type) {
    default:
      return (
        <TouchableHighlight {...circleProps.touch}>
          <Icon name={props.icon} size={iconSize} {...circleProps.icon} />
        </TouchableHighlight>
      );
  }
}
