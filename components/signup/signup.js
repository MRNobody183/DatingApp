import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function Signup() {
  const auth = getAuth();
  const [selected, setSelected] = useState(undefined);
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });
  const navigation = useNavigation();
  async function mysignUp() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Login");
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
      console.log(value.error);
    }
  }
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <ScrollView className="top-16">
      <View className="flex justify-center">
        <View className="flex flex-row items-center justify-center ">
          <Text className="text-5xl  font-medium text-red-600">Let`s</Text>
          <Text className="text-5xl ml-2 font-light">Connect</Text>
        </View>
        {/* <View className="flex bg-slate-200 rounded-xl m-8 mt-10 mb-3 h-14 justify-center">
          <TextInput className="ml-5" placeholder="Name" />
        </View> */}
        <View className="flex bg-slate-200 rounded-xl ml-8 mr-8  h-14 justify-center">
          <TextInput
            className="ml-5"
            placeholder="Email"
            onChangeText={(text) => setValue({ ...value, email: text })}
          />
        </View>
        {/* <View className="flex bg-slate-200 mt-3 rounded-xl ml-8 mr-8  h-14 justify-center">
          <RNPickerSelect
            placeholder={{
              label: "Gender",
              value: null,
            }}
            onValueChange={(value) => setSelected(value)}
            items={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
          />
        </View> */}
        {/* <View className="flex bg-slate-200 mt-3 rounded-xl ml-8 mr-8  h-14 justify-center">
          <TextInput className="ml-5" placeholder="Age" />
        </View>
        <View className="flex bg-slate-200 rounded-xl m-8 mt-3 mb-3 h-14 justify-center">
          <TextInput className="ml-5" placeholder=" " />
        </View>
        <View className="flex bg-slate-200 rounded-xl ml-8 mr-8  h-14 justify-center">
          <TextInput className="ml-5" placeholder="Email" />
        </View> */}
        <View className="flex bg-slate-200 mt-3 rounded-xl ml-8 mr-8  h-14 justify-center">
          <TextInput
            className="ml-5"
            placeholder="Password"
            onChangeText={(text) => setValue({ ...value, password: text })}
          />
        </View>
        {/* <View className="flex bg-slate-200 mt-3 rounded-xl ml-8 mr-8  h-14 justify-center">
          <TextInput className="ml-5" placeholder="Confirm Password" />
        </View> */}
        <View className="flex flex-row ml-10 mt-5">
          <TouchableOpacity className="ml-1 flex flex-row">
            <Text className="">Already Have an Account?</Text>
            <Text className="text-red-600 ml-1" onPress={() => handleLogin()}>
              Click Here
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex bg-red-700 items-center rounded-xl ml-8 mr-8 mt-5 h-14 justify-center">
          <TouchableOpacity className="" onPress={mysignUp}>
            {/* <Link href="./home/home">Login</Link> */}
            <Text className="text-white text-xl">Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
