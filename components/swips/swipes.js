import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import Styles from "./swipes.style";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function SwipeableImage({ user }) {
  const navigation = useNavigation();
  const showMap = (coordinate) => {
    
    navigation.navigate("Map", {
      latitude: Number(coordinate.latitude),
      longitude: Number(coordinate.longitude),
    });
    console.log({ coordinate });
  };
  return (
    <SafeAreaView className="h-[600] ">
      <Image
        source={{ uri: user.picture.large }}
        className="h-full w-full object-fill"
      />

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
          <TouchableOpacity onPress={() => showMap(user.location.coordinates)}>
            <Text style={[Styles.textSecondary, Styles.textShadow]}>
              {user.location.city}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
