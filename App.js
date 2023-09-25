import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Board from "./src/components/Board";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDetails from "./src/components/ItemDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BoardScreen"
          screenOptions={{
            contentStyle: {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            },
          }}
        >
          <Stack.Screen
            name="BoardScreen"
            component={Board}
            options={{ headerShown: false, title: "Board" }}
          />
          <Stack.Screen
            name="ItemDetailsScreen"
            component={ItemDetails}
            options={{ title: "Item Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
