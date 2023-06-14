import { SafeAreaView, StatusBar, Text, View } from "react-native";
import Home from "./components/home/home";
import Login from "./components/Login/login";
import styles from "./components/home/home.style";
import Signup from "./components/signup/signup";
import Profile from "./components/profile/profile";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatList from "./components/chat/chatlist";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();
export default function App() {
  // return <Internet />;
  // return <SplashScreen/>;
  return (
    <Provider>
      <SafeAreaProvider>
        {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer> */}
        <ChatList />
      </SafeAreaProvider>
    </Provider>
    // <SafeAreaView style={styles.container}>
    //   {/* <Home /> */}
    //   <Login />
    //   {/* <Signup /> */}
    //   {/* <Profile/> */}
    // </SafeAreaView>
  );
}
