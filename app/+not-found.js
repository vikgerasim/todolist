import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const NotFound = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 26}}>Screen Not Found</Text>
      <Link href="/" style={{ fontSize: 26, color:'blue'}}>Go to the Home Screen</Link>
    </View>
  )
}

export default NotFound;