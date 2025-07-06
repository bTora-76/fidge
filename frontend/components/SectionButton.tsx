import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type propTypes = {
  section : string
  sectionId : string
}

const SectionButton = ({section, sectionId} : propTypes) => {
  const sectionName = section[0].toUpperCase() + section.slice(1,section.length)
  return (
    <Link href={{
      pathname : "/collection/section/[id]",
      params : {sectionid : section + sectionId}
    }} asChild>
    <TouchableOpacity className='bg-bgGrey flex-1 justify-center items-center'style={{padding:40, width : "75%", marginBottom : 20, borderRadius : 20}} activeOpacity={0.8}>
      <Text style={{fontSize : 18, fontWeight : "bold"}}>{sectionName }</Text>
    </TouchableOpacity>
    </Link>
  )
}

export default SectionButton