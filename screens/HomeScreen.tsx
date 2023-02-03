import { View, Text, Image, StatusBar } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const Homescreen = () => {
  const navigation = useNavigation();
  /*when screen mounts it triggers*/
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{ marginTop: StatusBar.currentHeight }} className="bg-white pt-1">
      <Text className="text-red-500">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            source={require("../assets/topbarIcon.png")}
          />
          {/* text */}
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now !
            </Text>
            <Text className="font-bold text-xl">
              Current location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          {/* user icon */}
          <UserIcon size={30} color="#00CCBB" />
        </View>
      </Text>
    </View>
  );
};

export default Homescreen;
