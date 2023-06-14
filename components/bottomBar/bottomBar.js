import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Styles from "./bottomBar.styles";

export default function BottomBar({ handleLikePress, handlePassPress }) {
  return (
    <View style={Styles.container}>
      <View />
      <TouchableOpacity style={Styles.button} onPress={handlePassPress}>
        <FontAwesome name="times" size={27} color="#F06795"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.button}>
        <FontAwesome
          name="heart"
          size={27}
          color="#64EDCC"
          onPress={handleLikePress}
        ></FontAwesome>
      </TouchableOpacity>
      <View />
    </View>
  );
}
