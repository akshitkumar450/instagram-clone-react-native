import { View, Text } from "react-native";
import React from "react";
import SignupForm from "../components/SignUp/SignupForm";
import tw from "tailwind-react-native-classnames";

const SignupScreen = () => {
  return (
    <View style={tw`flex-1 bg-white pt-20 px-2`}>
      <SignupForm />
    </View>
  );
};

export default SignupScreen;
