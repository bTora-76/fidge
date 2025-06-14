import React from "react";
import { Text, View } from "react-native";

const FoodCard = ({ name, parent }) => {
  return (
    <>
      <View
        id="invicibleContainer"
        style={{
          marginHorizontal: 16,
          width: 240,
          backgroundColor: "#F7374F",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 120,
        }}
      >
        <View
          id="cirlce"
          style={{
            position: "absolute",
            borderRadius: 100,
            backgroundColor: "#EAEAEA",
            top: 50,
            width: 150,
            height: 150,
            elevation: 10,
            zIndex: 1,
          }}
        ></View>
        <View
          style={{ width: 240, height: "100%" }}
          className="bg-bgGrey flex-1 items-center justify-center"
        >
          <Text
            style={{
              backgroundColor: "yellow",
              fontSize: 22,
              marginBottom: 20,
            }}
          >
            {name}
          </Text>
          <Text style={{ backgroundColor: "green", fontSize: 17 }}>
            {parent}
          </Text>
        </View>
      </View>
    </>
  );
};

export default FoodCard;
