import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from "react-native";

const notFound = () => {
  return (
    <>
        <Stack.Screen options={{headerShown : false}}/>
        <View className="flex-1 justify-center items-start  bg-green-700 ">
            <Text className="text-white text-4xl ml-32">404 Page Not Found!</Text>
        </View>
    </>
    
  )
}

export default notFound;