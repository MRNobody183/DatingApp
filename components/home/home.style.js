import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    
    padding: 10,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
export default styles;
