import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Styles from "./swipes.style";
import { FontAwesome } from "@expo/vector-icons";

export default function SwipeableImage({ user }) {

  return (
    <SafeAreaView className="h-[600] ">
      <Image source={{ uri: user.picture.large }} className="h-full w-full object-fill" />

  <View style={Styles.likeBox}>
    <Text style={{ ...Styles.textPrimary, color: "#64EDCC" }}>LIKE</Text>
  </View>

  <View style={Styles.passBox}>
    <Text style={{ ...Styles.textPrimary, color: "#F06795" }}>NOPE</Text>
  </View>

      <View style={Styles.textContainer}>
        <View style={Styles.textRow}>
          <Text style={[Styles.textPrimary, Styles.textShadow]}>
            {user.name.first}
          </Text>
          <Text style={[Styles.textSecondary, Styles.textShadow]}>
            {user.dob.age}
          </Text>
        </View>
        <View style={Styles.textRow}>
          <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
          <Text style={[Styles.textSecondary, Styles.textShadow]}>
            {user.location.city}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
