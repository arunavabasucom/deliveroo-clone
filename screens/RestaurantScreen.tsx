//@ts-nocheck
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import { accentColor, addressColor, ratingIconColor } from "../constant";
import {
  ChevronRightIcon,
  MapIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
const RestaurantScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const {
    params: {
      id,
      title,
      imgUrl,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  return (
    <>
      <BasketIcon />
      <ScrollView>
        {/* first section */}
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color={accentColor} />
          </TouchableOpacity>
        </View>
        {/* section  */}
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 mr-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color={ratingIconColor} opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> ﹒{genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPinIcon color={addressColor} opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby﹒
                  {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          {/* faq */}
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" size={20} />
            <Text className="pl-2 flex-1 text-md font-bold ">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={accentColor} />
          </TouchableOpacity>
        </View>
        {/* second section*/}
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* dishes */}

          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
