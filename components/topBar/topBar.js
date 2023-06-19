import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, Entypo, Fontisto } from "@expo/vector-icons";
import styles from "./topbar.style";
import { useNavigation } from "@react-navigation/native";
export default function TopBar() {
  const navigation = useNavigation();
  const handleprofile = () => {
    navigation.navigate("Profile");
  };
  const handleChat = () => {
    navigation.navigate("ChatList");
  }; 
  return (
    <View className=" flex-row items-center rounded-lg -bottom-10 justify-around bg-white shadow-lg h-16 z-10  shadow-black">
      <TouchableOpacity>
        <Fontisto name="heart-alt" size={27} color="#c61a09" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleChat()}>
        <FontAwesome name="comments" size={27} color="#df2c14" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleprofile()}>
        <Entypo name="user" size={27} color="#c61a09" />
      </TouchableOpacity>
    </View>
  );
}
