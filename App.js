import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPostScreen from "./screens/NewPostScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();
const headerOptions = {
  headerShown: false,
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewPost" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
