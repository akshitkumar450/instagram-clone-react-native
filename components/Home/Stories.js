import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { data } from "./data";
import { auth, db } from "../../firebase";

const Stories = () => {
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
