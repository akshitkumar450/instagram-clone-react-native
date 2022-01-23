import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Home/Post";
import { postsData } from "../components/Home/data";
import BottomTabs from "../components/Home/BottomTabs";
const HomeScreen = () => {
  return (
    <View style={tw`bg-black flex-1 pt-8`}>
      <Header />
      <Stories />
      <ScrollView showsVerticalScrollIndicator={false} style={tw`mt-2`}>
        {postsData.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </ScrollView>
      <BottomTabs />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
