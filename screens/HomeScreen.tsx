import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import Catagories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  /*when screen mounts it triggers*/
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={require("../assets/topbarIcon.png")}
        />
        <View className=" flex flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now !</Text>
          <Text className="font-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* search  */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>
      {/* body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 1000,
        }}
      >
        {/* Catagories */}
        <Catagories />

        {/* Featured row */}
        <FeaturedRow
          id={1}
          title="Featured"
          description="Paid placements from our partners"
        />
        {/* Tasty Discounts*/}
        <FeaturedRow
          id={2}
          title="Tasty Discounts"
          description="Everyone's been enjoying these tasty discounts"
        />
        {/* Offers near you*/}
        <FeaturedRow
          id={3}
          title="Offers near you!"
          description="Everyone's been enjoying these tasty discounts"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
