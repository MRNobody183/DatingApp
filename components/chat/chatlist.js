import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";
export default function ChatList() {
  const users = useSelector((state) => state.selectedUser);
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);
  const openChat = (u) => {
    navigation.navigate("Chat", { user: u });
  };
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data;
          setContacts(data);
          console.log("ME", contact.phoneNumbers[0].number);
        }
      }
    })();
  }, []);
  return (
    <SafeAreaProvider>
      <ScrollView className="  bg-slate-200  h-full flex flex-col pt-2">
        {users.length > -1 &&
          users.map((u) => {
            console.log(u);
            return (
              <TouchableOpacity
                onPress={() => openChat(u)}
                key={u.id}
                className=" flex flex-row bg-zinc-100 border-b p-2"
              >
                <View>
                  <Image
                    source={{
                      uri: u.img,
                    }}
                    className="rounded-full h-16 w-16  content-evenly"
                  />
                </View>
                <View className="flex ml-3">
                  <Text className="text-base">{u.name}</Text>
                  <Text className="text-base">{u.city}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        {contacts.length > -1 &&
          contacts.map((u) => {
            console.log(u);
            return (
              <TouchableOpacity
                onPress={() => openChat(u)}
                key={u.id}
                className=" flex flex-row bg-zinc-100 border-b p-2"
              >
                <View>
                  <Image
                    source={{
                      uri: "#",
                    }}
                    className="rounded-full h-16 w-16  content-evenly"
                  />
                </View>
                <View className="flex ml-3">
                  <Text className="text-base">
                    {u.firstName} {u?.lastName}
                  </Text>
                  {/* <Text className="text-base">{u.phoneNumbers?.number}</Text> */}
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </SafeAreaProvider>
  );
}
