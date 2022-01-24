import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SignedInStack, SignedOutStack } from "./Navigation";
import { auth } from "./firebase";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsub();
    };
  }, []);
  //   if we have current user then it should have access to SignedInStack else SignedOutStack
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
