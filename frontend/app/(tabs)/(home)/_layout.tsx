import { Stack } from "expo-router";
import React from "react";

const HomeLayout = () => {
  const showHeader = false
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="collection/[id]" options={{headerShown : showHeader}}/>
        <Stack.Screen name = "collection/section/[id]" options={{headerShown : showHeader}}/>
      </Stack>
  );
};

export default HomeLayout;
