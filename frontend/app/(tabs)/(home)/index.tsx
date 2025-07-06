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

import FidgeButton from "@/components/FidgeButton";
import FoodCard from "@/components/FoodCard";


const DATA = [
  {id: 1, name: "item1", parent: "fidge A" },
  {id: 2, name: "item2", parent: "fidge A" },
  {id:3, name: "item3", parent: "fidge A" },
  { id:4,name: "item3", parent: "fidge A" },
  { id:5,name: "item3", parent: "fidge A" },
  { id:6,name: "item3", parent: "fidge A" }
];

const Fidges = [
  {id: 1, name: "SuperFideg",},
  {id: 2, name: "Home fidge" },
  {id:3, name: "Fidge3"},
  { id:4,name: "Fidge4"},
  { id:5,name: "Fidge5" },
  { id:6,name: "Fidge6" }
]

const index = () => {
  return (
    <>
      <SafeAreaView
        className="flex-1 justify-center items-center w-screen h-screen bg-mainGreen"
        edges={["top"]}
      >
        <ScrollView
          className="flex-1 w-full h-100"
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
            renderItem={({ item,index }) => (
              <FoodCard name={item.name} parent={item.parent} id = {item.id} />
            )}
          ></FlatList>
          

            <View id="container-for-my-fidges" className="mt-40 w-screen items-center ">
              <Text className="mb-14 text-2xl font-bold text-white">My Fidges</Text>
              <FidgeButton id = "1"></FidgeButton>
              <FidgeButton id = "2"></FidgeButton>

            </View>

        </ScrollView>
            

      </SafeAreaView>
    </>
  );
};

export default index;
