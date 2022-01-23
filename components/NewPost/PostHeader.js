import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const PostHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-row items-center `}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={tw`text-white font-bold text-2xl ml-4 `}>&#x3c;</Text>
      </TouchableOpacity>
      <Text style={tw`text-xl text-white text-center flex-1`}>New Post</Text>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({});
