import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type propTypes = {
  name : string,
  parent : string,
  id : number
}


const FoodCard = ({name, parent, id} : propTypes) => {
  
  let addedMargin = (name === "item1" ? 40 : 0);
  
  


  return (
    <>
    
    <Link href={{pathname : "/collection/[id]", params : {id : id}}} asChild>
      <TouchableOpacity
        id="invicibleContainer"
        style={{
          flex : 1,
          marginHorizontal: 16,
          width: 240,
          height: 400,
         
          flexDirection: "column",
          marginLeft : addedMargin,
          paddingTop: 120,
        }}
        activeOpacity={0.8}
      >
        <View
          id="cirlce"
          style={{
            position: "absolute",
            borderRadius: 100,
            backgroundColor: "#EAEAEA",
            top: 50,
            width: 190,
            height: 190,
            elevation: 10,
            zIndex: 1,
            alignSelf : "center"
          }}
        ></View>
        <View
        style = {{height : "100%", borderRadius : 15}}
        id = "box"
          className="w-60 bg-bgGrey flex flex-col justify-center "
        >
          <Text
            style={{
              
              fontSize: 22,
              marginTop : 85,
              textAlign : "center",
              marginBottom : 30,
              fontWeight : 700
              
  
        
            }}
          >
            {name}
          </Text>
          <Text style={{ fontSize: 17, textAlign:"center" , color : "#1C654B", fontWeight : 500}}>
            {parent}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
    </>
  );
};

export default FoodCard;
