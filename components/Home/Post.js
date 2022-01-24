import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { auth, db } from "../../firebase";

const Post = ({ post }) => {
  return (
    <View style={tw`mt-5 `}>
      <PostHeader
        profile={post.profile_picture}
        user={post.user}
        id={post.id}
      />
      <PostImage postUrl={post.postUrl} />
      <View style={tw`px-2`}>
        <PostFooter />
        <PostCaption
          user={post.user}
          caption={post.caption}
          likes={post.liked_by_users.length}
        />

        <PostComments comments={post.comments} id={post.id} />
      </View>
    </View>
  );
};

export default Post;

const PostHeader = ({ profile, user, id }) => {
  // deleting post
  const deletePost = async () => {
    await db
      .collection("instaUsers")
      .doc(auth.currentUser.email)
      .collection("posts")
      .doc(id)
      .delete();
  };
  return (
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
        <TouchableOpacity onPress={deletePost}>
          <Text style={tw`text-white text-3xl`}>···</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

// adding the comment to specific post of id
const PostComments = ({ comments, id }) => {
  console.log(id);
  const [comment, setComment] = useState("");
  const addComment = () => {
    db.collection("instaUsers")
      .doc(auth.currentUser.email)
      .collection("posts")
      .doc(id)
      .update({
        comments: [
          ...comments,
          { user: auth.currentUser.displayName, comment },
        ],
      });
    setComment("");
  };
  return (
    <View>
      <View>
        {comments && comments.length !== 0 && (
          <>
            <Text style={tw`text-gray-500 my-2`}>
              View {comments.length > 1 ? "comments" : "comment"}
            </Text>
            {comments.map((comment, idx) => (
              <View key={idx} style={tw`flex-row items-center`}>
                <Text style={tw`text-white font-bold mr-2`}>
                  {comment.user}
                </Text>
                <Text style={tw`text-white`}>{comment.comment}</Text>
              </View>
            ))}
          </>
        )}
      </View>
      {/**for writing comment */}
      <TextInput
        placeholder="comment"
        style={tw`text-white`}
        placeholderTextColor="gray"
        onSubmitEditing={addComment}
        onChangeText={(text) => setComment(text)}
        value={comment}
      />
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
