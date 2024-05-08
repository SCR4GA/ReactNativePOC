import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: StatusBar.currentHeight,
  },
  search: {
    flex: 0.1,
    padding: 16,
  },
  restaraunts: {
    padding: 16,
    flex: 1,
    backgroundColor: "orange",
  },
});
