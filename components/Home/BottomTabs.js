import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { bottomTabIcons } from "./data";

const BottomTabs = () => {
  const [select, setSelected] = useState("Home");
  return (
    <View style={tw`p-2 flex-row justify-around`}>
      {bottomTabIcons.map((tab) => (
        <View key={tab.id}>
          <TouchableOpacity onPress={() => setSelected(tab.name)}>
            <Image
              style={[
                styles.icon,
                tab.name === "Profile" && styles.rounded(select),
              ]}
              source={{
                uri: select === tab.name ? tab.active : tab.inactive,
              }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {
    width: 35,
    resizeMode: "contain",
    height: 35,
  },
  //   conditional styling
  //   using the select state
  rounded: (select) => ({
    borderRadius: 100,
    borderWidth: select === "Profile" ? 1 : 0,
    borderColor: "white",
  }),
});
