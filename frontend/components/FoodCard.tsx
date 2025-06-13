import React from 'react'
import { Text, View } from 'react-native'

const FoodCard = ({name}) => {
  return (
    <>
    <View className="flex-1 bg-bgGrey m-20 h-3/4"><Text className="text-black">{name}</Text></View></>
  )
}

export default FoodCard