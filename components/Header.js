import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import insta from "../assets/header-logo.png";
const Header = () => {
  return (
    <View style={tw`flex-row justify-between px-5`}>
      <View style={tw`flex-1 flex-row`}>
        <TouchableOpacity>
          <Image
            style={{
              width: 100,
              resizeMode: "contain",
              height: 50,
            }}
            source={insta}
          />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row items-center justify-around`}>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
              }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Image
              style={[tw`mx-2`, styles.icon]}
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`relative`}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
              }}
            />
            <View style={tw`absolute -right-4 -top-2 w-full h-full`}>
              <Text style={tw`text-white bg-red-400 text-center rounded-full `}>
                11
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  icon: {
    width: 30,
    resizeMode: "contain",
    height: 30,
  },
});
