import { Link } from "expo-router"
import React from 'react'
import { Text, View } from 'react-native'

const About = () => {
  return (
    <View>
      <Text>About Page</Text>
      <Link href = "/">Go home</Link>
    </View>
  )
}

export default About