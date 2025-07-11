import { Stack } from "expo-router";
import React from "react";

const RegisterLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: true }} />
    </Stack>
  );
};

export default RegisterLayout;
