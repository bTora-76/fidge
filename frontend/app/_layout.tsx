import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";

const RootLayout = () => {
  return (
    <>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="setting" options={{ headerShown: false }} />
      
      
        </Stack>
      </SafeAreaProvider>
    </>
  );
};

export default RootLayout;
