import React from 'react'
import { FlatList, ScrollView, Text, TextInput } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

import FoodCard from '../../../components/FoodCard.tsx'

const DATA = [
  {"name" : "item1"},
  {"name" : "item2"},
  {"name" : "item3"},
]


const index = () => {
  return (
    <>
    <SafeAreaView className="flex-1 justify-center items-center bg-mainGreen w-screen h-screen">
      <ScrollView className="w-full h-full" contentContainerClassName="items-center">
          <Text className="absolute left-8 top-5 text-2xl font-bold text-white">
          Welcome,{'\n'}User
          </Text>
          <TextInput placeholder="Search Something..." placeholderTextColor= "#A4A4A4" className="bg-bgGrey mt-safe-offset-24 w-3/4 p-2.5 rounded-full"/>

          <FlatList className="h-60 abosulute left-20" showsHorizontalScrollIndicator = {false} horizontal = {true} data={DATA} renderItem={({item})=><FoodCard name = {item.name} />}></FlatList>

      </ScrollView>
      
    </SafeAreaView></>

  )
}

export default index