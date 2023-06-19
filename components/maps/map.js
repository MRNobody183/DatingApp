import MapView, { Marker } from "react-native-maps";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
export default function Map() {
  const route = useRoute();
  getuserLocaton = () => {};
  console.log(route.params.longitude, route.params.latitude);
  const mapRegion = {
    latitude: route.params.latitude,
    longitude: route.params.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <SafeAreaView>
      <MapView
        className="h-full  w-full"
        region={mapRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
    </SafeAreaView>
  );
}
