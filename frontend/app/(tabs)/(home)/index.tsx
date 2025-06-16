import { Link } from "expo-router";
import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FoodCard from "../../../components/FoodCard.tsx";

const DATA = [
  { name: "item1", parent: "fidge A" },
  { name: "item2", parent: "fidge A" },
  { name: "item3", parent: "fidge A" },
  { name: "item3", parent: "fidge A" },
  { name: "item3", parent: "fidge A" },
  { name: "item3", parent: "fidge A" }
];

const index = () => {
  return (
    <>
      <SafeAreaView
        className="flex-1 justify-center items-center w-screen h-screen"
        edges={["top"]}
      >
        <ScrollView
          className="flex-1 w-full h-100  bg-mainGreen "
          contentContainerClassName="items-center "
        >
          <Text className="absolute left-8 top-5 text-2xl font-bold text-white">
            Welcome,{"\n"}User
          </Text>

          <Link href="/setting" asChild>
            <TouchableOpacity className="absolute right-8 top-5">
              <Text>setting</Text>
            </TouchableOpacity>
          </Link>

          <TextInput
            placeholder="Search Something..."
            placeholderTextColor="#A4A4A4"
            className="bg-bgGrey mt-safe-offset-24 w-3/4 p-2.5 rounded-full mb-5"
          />

          <FlatList
            style={{
              
              flex : 1,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA}
            renderItem={({ item }) => (
              <FoodCard name={item.name} parent={item.parent} />
            )}
          ></FlatList>
          <View className="w-40 h-80s bg-white"></View>
        </ScrollView>
            

      </SafeAreaView>
    </>
  );
};

export default index;
