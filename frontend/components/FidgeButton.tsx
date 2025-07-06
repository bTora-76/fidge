import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

const imgTemplateURL = "https://placehold.jp/150x150.png"

type propTypes = {
    id : string
}

const FidgeButton = ({id}: propTypes) => {
  return (
    <Link href={{
        pathname : "/collection/[id]",
        params : {id : id}
    }} asChild>
    <TouchableOpacity activeOpacity={0.8} className=" w-3/4 h-52 bg-bgGrey items-center justify-center" style = {{height : 90, borderRadius :20, flexDirection : "row", marginBottom : 24 }}>
        <Image source={{uri:imgTemplateURL}} style={{width:65, height:65, marginRight : 30}}></Image>
        <Text>FidgeButton</Text>
    </TouchableOpacity>
    </Link>
  )
}

export default FidgeButton