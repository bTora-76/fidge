import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Setting = () => {
  return (
    <SafeAreaView
      className="relative flex-1 w-screen h-screen justify-center "
      edges={["top"]}
    >
      <View className="h-full w-full  bg-bgDarkGrey">
        <Link href="../" asChild className="absolute left-5 top-5 ">
          <TouchableOpacity>
            <Text className="font-extrabold text-2xl text-white"> {"<"} </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
