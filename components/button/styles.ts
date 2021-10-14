import { StyleSheet } from "react-native";

export const DefaultButtonStyles = StyleSheet.create({
  DefaultButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 60 / 2,
    width: "100%",
    height: 60,
  },
  NormalButton: {
    backgroundColor: "#1657FF",
    borderColor: "#1657FF",
  },
  PressedButton: {
    backgroundColor: "#fff",
    borderColor: "#1657FF",
  },
  NormalButtonText: {
    color: "#fff",
  },
  PressedButtonText: {
    color: "#1657FF",
  },
});
