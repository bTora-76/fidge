import ItemButton from '@/components/ItemButton'
import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { FlatList, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'

const data = [1,2,3,4,5,6,7,8,9,10]


const OneSection = () => {
  const {sectionid} = useLocalSearchParams()
  return (
    
    

    <SafeAreaView
          className="relative flex-1 w-screen   bg-mainGreen "
          edges={["top"]}
        >
          <Link href="../" asChild className="absolute left-5 top-5 ">
              <TouchableOpacity>
                <Text className="font-extrabold text-2xl text-white"> {"<"} </Text>
              </TouchableOpacity>
            </Link>
            <Text className="mt-16 text-white">{sectionid}</Text>
            <Text className='text-white'>put item list here</Text>
            
          <FlatList 
          data={data}
          renderItem={({item})=> <ItemButton />  }
          contentContainerStyle={{ width : "100%", alignItems : 'center',  paddingBottom : 100}}
          style = {{flex : 1,}}
          scrollEnabled = {true}>
          
            

            
            

          </FlatList>
        </SafeAreaView>
  )
}

export default OneSection