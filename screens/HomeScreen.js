import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";
import Stories from "../components/Stories";
const HomeScreen = () => {
  return (
    <View style={tw`bg-black flex-1 pt-8`}>
      <Header />
      <Stories />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
