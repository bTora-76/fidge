import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView
      className="relative flex-1 w-screen h-screen justify-center "
      edges={["top"]}
    >
      <View className="h-full w-full  bg-bgDarkGrey">
        <Text className="text-white">Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
