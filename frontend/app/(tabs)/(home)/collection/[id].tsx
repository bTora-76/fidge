import SectionButton from '@/components/SectionButton'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type propTypes = {
    id : string
}

const CollectionId = () => {

  const {id : fidgeId} : propTypes = useLocalSearchParams()

  return (
    
  <SafeAreaView
  className="flex-1 bg-mainGreen w-screen "
  edges={["top"]}
  >
  <ScrollView className="flex-1 w-full" contentContainerClassName='items-center justify-center' >
    <Text className="absolute left-8 top-5 text-2xl font-bold text-white">
      Name: Myfidge, Id: {fidgeId}
    </Text>
    <View id="container-for-section-button" className='mt-28 w-screen  justify-center items-center'>
      <SectionButton section = "freezer" sectionId = {fidgeId}/>
      <SectionButton section = "top" sectionId = {fidgeId}/>
      <SectionButton section = "middle" sectionId = {fidgeId}/>
      <SectionButton section="bottom" sectionId = {fidgeId}/>
    </View>
  </ScrollView>
</SafeAreaView>

  )
}

export default CollectionId






