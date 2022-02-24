import React from 'react'
import { ViewBase, View, Text, TouchableOpacity, SafeAreaView, Image, ImageSourcePropType } from 'react-native'

const ProfileCard = () => {
  return (
    <SafeAreaView style={{
      borderBottomColor: 'gainsboro',
      borderBottomWidth: 1,
      backgroundColor: 'lightblue'
    }}>
      <Image 
        source={require('../../assets/images/pizzaGuy.png')} 
        style={{
          height: 150,
          width: 150,
          marginLeft: 30,
          borderRadius: 80,
          borderWidth: 1,
          borderColor: 'black'
        }}  
      />
    </SafeAreaView>
  )
}

export default ProfileCard