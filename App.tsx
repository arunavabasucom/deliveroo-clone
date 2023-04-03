//@ts-nocheck

/* polyfills */
/** URL polyfill */
import "react-native-url-polyfill/auto"; /*for sanity typeScript*/

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
/*screens*/
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {/*screens*/}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="DeliveryScreen"
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
