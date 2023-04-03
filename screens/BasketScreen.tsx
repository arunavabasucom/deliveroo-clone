//@ts-nocheck
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  selectedBasketItems,
  removeFromBasket,
  selectBasketTotal,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { accentColor } from "../constant";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectedBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItems, setGroupedItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results: any, item: any) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItems(groupedItems);
  }, [items]);
  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: StatusBar.currentHeight }}
      className="flex-1 bg-white"
    >
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full absolute top-3 right-5"
          >
            <XCircleIcon color={accentColor} height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={require("../assets/DeliveryBoyIcon.png")}
            className="h-7 w-7 rounded-full bg-gray-300 p-4"
          />
          <Text className="flex-1">Deliver in 50-70 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItems).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{items?.length} x</Text>
              <Image source={{ uri: urlFor(items[0]?.image).url() }} />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="INR" />
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Sub Total</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="INR" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={30} currency="INR" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text> Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 30} currency="INR" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrderScreen")}
            className="rounded-lg bg-[#00CCBB] p-4 "
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
