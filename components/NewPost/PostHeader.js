import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const PostHeader = () => {
  return (
    <View style={tw`flex-row items-center `}>
      <TouchableOpacity>
        <Text style={tw`text-white font-bold text-xl ml-2 `}>&#x3c;</Text>
      </TouchableOpacity>
      <Text style={tw`text-xl text-white text-center flex-1`}>New Post</Text>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({});
