import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <SafeAreaView>
      <View className="flex flex-col justify-between">
        <View className="flex justify-end items-end pr-5 pt-4 mb-0">
          <TouchableOpacity>
            <FontAwesome5 name="edit" size={18} />
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center mt-2 pb-8 border-red-900 border-b-2">
          <View className="flex bg-slate-100 rounded-full h-32 w-32 ">
            <Image
              source={{
                uri: "https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Boy-2.jpeg",
              }}
              className="rounded-full h-32 w-32 content-evenly"
            />
          </View>
          <View>
            <Text className="flex text-2xl text-center mt-4 ">Nobody</Text>
          </View>
        </View>
        <View className="p-5 rounded-xl bg-slate-200 mt-2 flex justify-between flex-row">
          <View className="flex flex-row items-center space-x-3">
            <SimpleLineIcons name="question" size={24} color="black" />
            <Text>FAQ</Text>
          </View>
          <View className="flex flex-row items-center justify-end">
            <Ionicons
              name="ios-chevron-forward-sharp"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View className="p-5 rounded-xl bg-slate-200 mt-2 flex justify-between flex-row">
          <View className="flex flex-row items-center space-x-3">
            <Ionicons name="settings" size={24} color="black" />
            <Text>Setting</Text>
          </View>
          <View className="flex flex-row items-center justify-end">
            <Ionicons
              name="ios-chevron-forward-sharp"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View className="p-5 rounded-xl bg-slate-200 mt-2 flex justify-between flex-row">
          <View className="flex flex-row items-center space-x-3">
            <Ionicons name="arrow-undo-outline" size={24} color="black" />
            <Text className="text-base">Logout</Text>
          </View>
          <View className="flex flex-row items-center justify-end">
            <Ionicons
              name="ios-chevron-forward-sharp"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
