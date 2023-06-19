import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
   
  // photo: {
  //   height: "100%",
  //   resizeMode: "cover",
  //   borderRadius: 30,
  // },
  textContainer: {
    position: "absolute",
    bottom: 80,
    left: 20,
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textPrimary: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  textSecondary: {
    color: "white",
    marginLeft: 10,
    fontSize: 25,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.80)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
export default Styles;
