import React from 'react'
import { ViewBase, View, Text, TouchableOpacity, SafeAreaView, Image, ImageSourcePropType } from 'react-native'

const ProfileCard = () => {
  return (
    <SafeAreaView style={{
      borderBottomColor: 'gainsboro',
      borderBottomWidth: 1,
      backgroundColor: 'teal'
    }}>
      <Text>Profile card</Text>
      <Image 
        source={{ uri: 'https://avatars.dicebear.com/api/bottts/idk.svg' }}
        style={{ height: 100, width: 100}}
      />
    </SafeAreaView>
  )
}

export default ProfileCard
