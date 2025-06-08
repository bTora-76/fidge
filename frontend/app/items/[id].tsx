import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Details = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text className="text-3xl">Id: {id}</Text>
    </View>
  );
};

export default Details;
