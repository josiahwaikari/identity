import { StyleSheet } from "react-native";

export const CircleButtonStyles = StyleSheet.create({
  DefaultCircleButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 60 / 2,
    width: 60,
    height: 60,
  },
  NormalCircleButton: {
    backgroundColor: "#1657FF",
    borderColor: "#1657FF",
  },
  PressedCircleButton: {
    backgroundColor: "#fff",
    borderColor: "#1657FF",
  },
  NormalButtonIcon: {
    color: "#fff",
  },
  PressedButtonIcon: {
    color: "#1657FF",
  },
});
