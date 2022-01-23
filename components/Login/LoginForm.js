import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

// loginform validation schema
const loginFormSchema = Yup.object().shape({
  email: Yup.string().email().required("An email address is required"),
  password: Yup.string()
    .required()
    .min(6, "Your password has to have at least 8 Characters"),
});

const LoginForm = () => {
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validateOnMount={true}
      validationSchema={loginFormSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
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
            style={[
              tw`mt-10 bg-gray-100 rounded-md  p-2 `,
              {
                //   if the email is not valid it will have red border else gray
                borderColor:
                  values.email.length < 1 || Validator.validate(values.email)
                    ? "gray"
                    : "red",
                borderWidth: 1,
              },
            ]}
            // no need to maintain states
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          {/**
               to show error if email is not valid
               {errors.email && <Text style={tw`text-red-500`}>{errors.email}</Text>}
               */}
          <TextInput
            keyboardType="default"
            autoCapitalize="none"
            textContentType="password"
            placeholder="password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            autoCorrect={false}
            style={[
              tw`my-5 bg-gray-100 rounded-md  p-2 `,
              {
                //   if the password is not valid it will have red border else gray
                borderColor:
                  // if  < 1 thes user has not started typing || or password is > 6 then it is valid password so gray border else red border
                  values.password.length < 1 || values.password.length >= 6
                    ? "gray"
                    : "red",
                borderWidth: 1,
              },
            ]}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <View style={tw`items-end mb-8`}>
            <Text style={tw`text-blue-500`}>Forgot passowrd ?</Text>
          </View>

          {/**use pressable instead of button to customize */}
          {/**making the btn  diaable if valdiation of email or password fails
            which is given by (isValid)
        */}
          <Pressable
            style={tw`rounded-lg p-2  ${
              !isValid ? "bg-gray-400" : "bg-blue-500"
            }`}
            onPress={handleSubmit}
            disabled={!isValid}>
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
      )}
    </Formik>
  );
};

export default LoginForm;
