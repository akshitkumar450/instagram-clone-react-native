import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPostScreen from "./screens/NewPostScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const Stack = createNativeStackNavigator();
const headerOptions = {
  headerShown: false,
};
// if the user is logged in then is should not have access to login and signup screens
export const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewPost" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// if the user is not logged in then is should not have access to Home and NewPost screens
export const SignedOutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions} initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
