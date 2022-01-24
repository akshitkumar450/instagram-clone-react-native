import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Post = ({ post }) => {
  return (
    <View style={tw`mt-5 `}>
      <PostHeader profile={post.profileUrl} user={post.user} />
      <PostImage postUrl={post.postUrl} />
      <View style={tw`px-2`}>
        <PostFooter />
        <PostCaption
          user={post.user}
          caption={post.caption}
          likes={post.likes}
        />
        {post && post.comments && post.comments.length !== 0 && (
          <PostComments comments={post.comments} />
        )}
      </View>
    </View>
  );
};

export default Post;

const PostHeader = ({ profile, user }) => (
  <View style={tw`flex-row items-center justify-between px-2`}>
    <View style={tw`flex-row items-center flex-1`}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: "orange",
        }}
        source={{
          uri: profile,
        }}
      />
      <Text style={tw`text-white ml-2`}>{user}</Text>
    </View>
    <View>
      <Text style={tw`text-white text-3xl`}>···</Text>
    </View>
  </View>
);

const PostImage = ({ postUrl }) => (
  <View style={tw`mt-2`}>
    <Image
      style={{
        width: "100%",
        height: 350,
      }}
      source={{
        uri: postUrl,
      }}
    />
  </View>
);

const PostFooter = () => (
  <View>
    <View style={tw`flex-row items-center mt-2 `}>
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
      <View>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const PostCaption = ({ caption, likes, user }) => (
  <View style={tw`mt-2`}>
    <Text style={tw`text-white font-bold`}>Total likes {likes}</Text>
    <View style={tw`flex-row items-center`}>
      <Text style={tw`text-white mr-2`}>{user} : </Text>
      <Text style={tw`text-white`}>{caption}</Text>
    </View>
  </View>
);

const PostComments = ({ comments }) => {
  return (
    <View>
      <Text style={tw`text-gray-500 my-2`}>
        View {comments.length > 1 ? "comments" : "comment"}
      </Text>
      {comments.map((comment, idx) => (
        <View key={idx} style={tw`flex-row items-center`}>
          <Text style={tw`text-white font-bold mr-2`}>{comment.user}</Text>
          <Text style={tw`text-white`}>{comment.comment}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 35,
    resizeMode: "contain",
    height: 35,
  },
  bg: {
    backgroundColor: "red",
  },
});
