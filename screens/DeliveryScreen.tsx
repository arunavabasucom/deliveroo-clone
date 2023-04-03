//@ts-nocheck
import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import { accentColor } from "../constant";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  console.log(restaurant);
  const mapRegion = {
    // latitude: restaurant.lat,
    // longitude: restaurant.lng,
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XCircleIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg ">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-200">Estimated Arrival</Text>
              <Text className="text-2xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={require("../assets/ProcessGif.gif")}
              className="h-15 w-15"
            />
          </View>
          <Progress.Bar size={30} color={accentColor} indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is on the way!
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        region={mapRegion}
        className="flex-1 -mt-10 z-0"
        mapType="standard"
      >
        <Marker coordinate={mapRegion} title={restaurant.title} />
      </MapView>
      <SafeAreaView
        className="bg-white flex-row items-center space-x-5
          h-20"
      >
        <Image
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
          source={require("../assets/DeliveryBoyIcon.png")}
        />
        <View className="flex-1 ">
          <Text className="text-lg">Andrew Tate</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
