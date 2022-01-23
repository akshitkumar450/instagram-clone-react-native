import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import validUrl from "valid-url";
// validation for our text fields
const uploadPostSchema = Yup.object().shape({
  postUrl: Yup.string().url().required("url is required"),
  caption: Yup.string()
    .max(5, "caption has reached limit")
    .required("caption is required"),
});

const blankImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVWHaFOpTtemInCykPsJJI_Ud8vpEqSC7Ng&usqp=CAU";

const PostForm = () => {
  const navigation = useNavigation(blankImg);

  const [thumbnailUrl, setThunmbnailUrl] = useState();
  return (
    <View>
      <Formik
        initialValues={{ caption: "", postUrl: "" }}
        // when we submit the form it will run
        onSubmit={(values) => {
          console.log(values);
          navigation.goBack();
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}>
        {/**form =>caption,url */}
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View style={tw`mt-5`}>
            <View style={tw`flex-row`}>
              <View>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "cover",
                  }}
                  source={{
                    // show the image which we have uploaded if it is a vlaid url (stars with https://) else show blank image
                    uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : blankImg,
                  }}
                />
              </View>
              <View style={tw`flex-1 ml-2`}>
                <TextInput
                  placeholder="caption"
                  multiline
                  placeholderTextColor="gray"
                  style={tw`text-white p-1 text-lg `}
                  //   no need to maintain states
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                />
                {/**if caption validation fails error will show */}
                {errors.caption && (
                  <Text style={tw`text-red-500`}>{errors.caption}</Text>
                )}
              </View>
            </View>
            <View style={tw`mt-5 mb-5`}>
              <TextInput
                placeholder="post url"
                placeholderTextColor="gray"
                multiline
                style={tw`text-white p-1`}
                onChangeText={handleChange("postUrl")}
                onBlur={handleBlur("postUrl")}
                value={values.postUrl}
                // to change preview image before submitting
                // to set the thumbnail what we type in text field
                // similar to reactjs in web
                onChange={(e) => setThunmbnailUrl(e.nativeEvent.text)}
              />
              {/**if postUrl validation fails then error will show */}
              {errors.postUrl && (
                <Text style={tw`text-red-500`}>{errors.postUrl}</Text>
              )}
            </View>
            {/**it will be diabled if any validation of fields failed */}
            <Button title="post" onPress={handleSubmit} disabled={!isValid} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default PostForm;

const styles = StyleSheet.create({});
