import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import { postsData } from "../components/data";
const HomeScreen = () => {
  return (
    <View style={tw`bg-black flex-1 pt-8`}>
      <Header />
      <Stories />
      <ScrollView style={tw`mt-2`}>
        {postsData.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
