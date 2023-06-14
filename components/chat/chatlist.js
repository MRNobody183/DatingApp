import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ChatList() {
  return (
    <SafeAreaProvider>
      <View className="top-10  bg-slate-100 h-full flex flex-col">
        <View className="flex mt-2 items-center bg-white shadow-lg">
          <Text className="text-xl font-semibold">Chat</Text>
        </View>
        <View className="ml-5 flex flex-row m-2">
          <View>
            <Image
              source={{
                uri: "https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Boy-2.jpeg",
              }}
              className="rounded-full h-12 w-12 content-evenly"
            />
          </View>
          <View className="flex ml-3">
            <Text className="text-base">Name</Text>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
