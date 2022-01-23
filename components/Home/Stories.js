import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { data } from "./data";

const Stories = () => {
  return (
    <View style={tw`px-2 mt-5`}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal
        renderItem={({ item: { image, name } }) => {
          return (
            <TouchableOpacity style={tw`mx-1 items-center`}>
              <Image
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: "orange",
                }}
                source={{
                  uri: image,
                }}
              />
              <Text style={tw`text-white`}>
                {name.toLowerCase().slice(0, 8)}...
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({});
