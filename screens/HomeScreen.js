import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Home/Post";
import { postsData } from "../components/Home/data";
import BottomTabs from "../components/Home/BottomTabs";
import { auth, db } from "../firebase";
const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  // getting posts corresponding to current logged in user only
  useEffect(() => {
    const unsub = db
      .collection("instaUsers")
      .doc(auth.currentUser.email)
      .collection("posts")
      .onSnapshot((snapshot) => {
        let temp = [];
        snapshot.docs.forEach((doc) => {
          temp.push({ ...doc.data(), id: doc.id });
        });
        setPosts(temp);
      });

    return () => {
      unsub();
    };
  }, []);
  console.log(posts);
  return (
    <View style={tw`bg-black flex-1 pt-8`}>
      <Header />
      <Stories />
      <ScrollView showsVerticalScrollIndicator={false} style={tw`mt-2`}>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </ScrollView>
      <BottomTabs />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
