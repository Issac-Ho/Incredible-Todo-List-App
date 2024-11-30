import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
  </Stack.Navigator>
);

const App = () => (
  <SafeAreaProvider>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} options={{ title: "Home" }} />
      <Drawer.Screen name="About" component={AboutScreen} options={{ title: "About" }} />
    </Drawer.Navigator>
  </SafeAreaProvider>
);

export default App;
