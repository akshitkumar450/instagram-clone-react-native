import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import PostHeader from "../components/NewPost/PostHeader";

const NewPostScreen = () => {
  return (
    <View style={tw`bg-black flex-1 pt-8`}>
      <PostHeader />
    </View>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({});
