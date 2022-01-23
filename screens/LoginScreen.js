import { StyleSheet, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import LoginForm from "../components/Login/LoginForm";

const LoginScreen = () => {
  return (
    <View style={tw`flex-1 bg-white pt-20 px-2`}>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
