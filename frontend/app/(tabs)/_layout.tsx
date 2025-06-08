import { Tabs } from "expo-router";
import React from "react";

import { HomeLogo } from "@/assets";
import { Image } from "react-native";

// images

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Image source={HomeLogo} className="size-1"></Image>
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{ title: "Fidges", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: "Settings", headerShown: false }}
      />
    </Tabs>
  );
};

export default _layout;
