import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { changeImage } from "../../redux/reducers/userDataSlice";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const userData = useSelector((state) => state.userData);
  const [image, setImage] = useState(userData.img);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const changeProfile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      dispatch(changeImage(result.assets[0].uri.toString()));
      setImage(result.assets[0].uri);
    }
  };
  const handleCamera = () => {
    navigation.navigate("Takeimg");
  };
  return (
    <SafeAreaView>
      <View className="flex flex-col justify-between">
        <View className="flex justify-end items-end pr-5 pt-4 mb-0">
          <TouchableOpacity onPress={() => handleCamera(0)}>
            <FontAwesome5 name="camera" size={18} />
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center mt-2 pb-8 border-red-900 border-b-2">
          <View className="flex bg-slate-100 rounded-full h-32 w-32 ">
            <Image
              source={{
                uri: image,
              }}
              className="rounded-full h-32 w-32 content-evenly"
            />
            <TouchableOpacity
              className="flex items-end z-10 top-[-22px] right-2"
              onPress={changeProfile}
            >
              <AntDesign name="pluscircle" size={24} color="blue" />
            </TouchableOpacity>
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
