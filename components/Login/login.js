import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from "firebase/auth";

// import { useRouter } from "expo-router";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
// import { Link } from "expo-router";

export default function Login() {
  const auth = getAuth();
  const navigation = useNavigation();
  const [phonenumber, setNumber] = useState();
  const [verify, setVerify] = useState();
  const [iferror, setError] = useState(false);
  //   const route = useRouter();
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });
  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Home");
      setError(false);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
      setError(true);
    }
  }
  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const phoneVerification = async () => {
    try {
      console.log(phonenumber);
      const confirmation = await signInWithPhoneNumber(auth, phonenumber);
      console.log(confirmation, "confirmed");
      setConfirm(confirmation);
    } catch (error) {
      console.error(error);
    }
  };
  const confirmCode = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        confirm.verificationId,
        code
      );
      let userData = await auth().currentUser.linkWithCredential(credential);
      setUser(userData.user);
    } catch (error) {
      if (error.code == "auth/invalid-verification-code") {
        console.log("Invalid code.");
      } else {
        console.log("Account linking error");
      }
    }
  };

  return (
    <SafeAreaView className="flex  text-lg justify- center ">
      <View className="flex justify-center h-full ">
        <View className="flex flex-row items-center justify-center ">
          <Text className="text-5xl  font-medium text-red-600">Let`s</Text>
          <Text className="text-5xl ml-2 font-light">Connect</Text>
        </View>
        <View className="flex bg-slate-200 rounded-xl m-8 mt-10 mb-3 h-14 justify-center">
          <TextInput
            className="ml-5"
            placeholder="UserName"
            onChangeText={(text) => setValue({ ...value, email: text })}
          />
        </View>
        <View className="flex bg-slate-200 rounded-xl ml-8 mr-8  h-14 justify-center">
          <TextInput
            className="ml-5"
            placeholder="Password"
            onChangeText={(text) => setValue({ ...value, password: text })}
          />
        </View>
        <View className="flex flex-row ml-10 mt-5">
          {iferror && (
            <Text className="text-red-500">
              You Have Entered Wrong Email/Password
            </Text>
          )}
        </View>
        <View className="flex flex-row ml-10 mt-5">
          <TouchableOpacity className="" onPress={() => handleSignup()}>
            <Text className="text-slate-500">Dont have an Account?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="" onPress={() => signIn()}>
          <View className="flex bg-red-700 items-center rounded-xl ml-8 mr-8 mt-5 h-14 justify-center">
            {/* <Link href="./home/home">Login</Link> */}
            <Text className="text-white text-xl">Login</Text>
          </View>
        </TouchableOpacity>
        <View className="flex flex-row items-center w-full justify-center space-x-10 mt-10">
          <View className="bg-red-700 p-2 rounded-md">
            <TouchableOpacity>
              <Ionicons name="logo-google" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View className="bg-red-700 p-2">
            <TouchableOpacity onPress={() => phoneVerification()}>
              <Entypo name="phone" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex bg-slate-200 rounded-xl m-8 mt-10 mb-3 h-14 justify-center">
        <TextInput
          className="ml-5"
          placeholder="UserName"
          onChangeText={(text) => setNumber(text)}
        />
      </View>
      <View className="flex bg-slate-200 rounded-xl ml-8 mr-8  h-14 justify-center">
        <TextInput
          className="ml-5"
          placeholder="Password"
          onChangeText={(text) => setValue({ ...value, password: text })}
        />
      </View>
      </View>
    
    </SafeAreaView>
  );
}
