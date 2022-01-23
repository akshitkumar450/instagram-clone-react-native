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

// signupform validation schema
const singUpFormSchema = Yup.object().shape({
  name: Yup.string().required().min(4, "Name is required"),
  email: Yup.string().email().required("An email address is required"),
  password: Yup.string()
    .required()
    .min(6, "Your password has to have at least 8 Characters"),
});

const SignupForm = () => {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={singUpFormSchema}
      validateOnMount={true}>
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
            keyboardType="default"
            autoCapitalize="none"
            textContentType="name"
            placeholderTextColor="gray"
            placeholder="Full Name"
            autoFocus={true}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            style={[
              tw`mt-10 bg-gray-100 rounded-md p-2 `,
              {
                borderColor:
                  // if user has not started (<1) typing or length is >4 then it is valid else invalid
                  // invalid case red border will come
                  values.name.length < 1 || values.name.length > 4
                    ? "gray"
                    : "red",
                borderWidth: 1,
              },
            ]}
          />
          {/**
               to show error if name is not valid
               {errors.name && <Text style={tw`text-red-500`}>{errors.name}</Text>}
               */}
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            textContentType="emailAddress"
            placeholderTextColor="gray"
            placeholder="Phone Number , username or email"
            autoFocus={true}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            style={[
              tw`my-5 bg-gray-100 rounded-md  p-2 `,
              {
                //   if the email is not valid it will have red border else gray
                borderColor:
                  values.email.length < 1 || Validator.validate(values.email)
                    ? "gray"
                    : "red",
                borderWidth: 1,
              },
            ]}
          />
          <TextInput
            keyboardType="default"
            autoCapitalize="none"
            textContentType="password"
            placeholder="password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            style={[
              tw` bg-gray-100 rounded-md  p-2 `,
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
          />

          {/**use pressable instead of button to customize */}
          <Pressable
            style={tw` mt-10 rounded-lg p-2 ${
              !isValid ? "bg-gray-500" : "bg-blue-500"
            }`}
            onPress={handleSubmit}
            // making the btn  diaable if valdiation of name,email or password fails
            // which is given by (isValid)
            disabled={!isValid}>
            <View style={tw`justify-center`}>
              <Text style={tw`text-white text-center text-lg`}>Sign Up</Text>
            </View>
          </Pressable>

          <View style={tw`items-center mt-10 flex-row justify-center`}>
            <Text>have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={tw`text-blue-400 font-bold`}>login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignupForm;
