import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// import { useRouter } from "expo-router";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import { Link } from "expo-router";

export default function Login() {
  const navigation = useNavigation();
  //   const route = useRouter();
  const handleLogin = () => {
    // const auth = getAuth();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    //     console.log("User", { user });
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
    navigation.navigate("Home");
  };
  const handleSignup = () => {
    navigation.navigate("Signup");
  };
  return (
    <SafeAreaView className="flex  text-lg justify- center ">
      <View className="flex justify-center h-full ">
        <View className="flex flex-row items-center justify-center ">
          <Text className="text-5xl  font-medium text-red-600">Let`s</Text>
          <Text className="text-5xl ml-2 font-light">Connect</Text>
        </View>
        <View className="flex bg-slate-200 rounded-xl m-8 mt-10 mb-3 h-14 justify-center">
          <TextInput className="ml-5" placeholder="UserName" />
        </View>
        <View className="flex bg-slate-200 rounded-xl ml-8 mr-8  h-14 justify-center">
          <TextInput className="ml-5" placeholder="Password" />
        </View>
        <View className="flex flex-row ml-10 mt-5">
          <TouchableOpacity className="" onPress={() => handleSignup()}>
            <Text className="text-slate-500">Dont have an Account?</Text>
          </TouchableOpacity>
        </View>
        <View className="flex bg-red-700 items-center rounded-xl ml-8 mr-8 mt-5 h-14 justify-center">
          <TouchableOpacity className="" onPress={() => handleLogin()}>
            {/* <Link href="./home/home">Login</Link> */}
            <Text className="text-white text-xl">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
