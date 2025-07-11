import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView
      className="relative flex-1 w-screen h-screen justify-center "
      edges={["top"]}
    >
      <View className="flex-1 justify-center items-center w-screen h-screen bg-mainGreen">
        <Text className="text-white">Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
