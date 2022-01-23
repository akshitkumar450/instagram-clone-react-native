import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={tw`mx-auto`}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={{
            uri: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
          }}
        />
      </View>
      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        placeholderTextColor="gray"
        placeholder="Phone Number , username or email"
        autoFocus={true}
        style={tw`mt-10 bg-gray-100 border-2 rounded-md border-gray-200 p-2 `}
      />
      <TextInput
        keyboardType="default"
        autoCapitalize="none"
        textContentType="password"
        placeholder="password"
        placeholderTextColor="gray"
        secureTextEntry={true}
        autoCorrect={false}
        style={tw`my-5 bg-gray-100 border-2 rounded-md border-gray-200 p-2 `}
      />
      <View style={tw`items-end mb-8`}>
        <Text style={tw`text-blue-500`}>Forgot passowrd ?</Text>
      </View>

      {/**use pressable instead of button to customize */}
      <Pressable
        style={tw`bg-blue-500 rounded-lg p-2`}
        onPress={() => console.log("login")}>
        <View style={tw`justify-center`}>
          <Text style={tw`text-white text-center text-lg`}>Log in</Text>
        </View>
      </Pressable>

      <View style={tw`items-center mt-10 flex-row justify-center`}>
        <Text>Don't have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={tw`text-blue-400 font-bold`}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
