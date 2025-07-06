import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';


const ItemButton = () => {

    const [isExpanded, setExpand] = useState(false);

    const toggleDropdown = () => {
      setExpand(!isExpanded);

    }


    return (
    <View className="w-3/4 bg-bgGrey" style={{padding : 20, borderRadius : 20, flexDirection : "row", display : 'flex', marginBottom : 30, height : isExpanded ? 200 : "auto"}}>
      <Text >{isExpanded ? "Expanded" : "Not expanded"}</Text>
      <TouchableOpacity 
      style={{backgroundColor : "#AAAAAA", height : "50", width : "50", justifyContent : "center", marginLeft : "auto"}} 
      onPress={toggleDropdown}><Text style={{textAlign : 'center'}}>Edit Item</Text></TouchableOpacity>
    </View>
  )

}

export default ItemButton