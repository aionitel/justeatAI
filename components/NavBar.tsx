import React from 'react'
import { ViewBase, View, Text, SafeAreaView, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'

const NavData = [
  {
    text: 'Home',
    image: require('../assets/icons/home.png')
  }
]

const NavBar = () => {
  return (
    <View>
      {NavData.map(item => (
        <Icon text={item.text} image={item.image} />
      ))}
    </View>
  )
}

interface IconProps {
  text: string,
  image: ImageSourcePropType
}

const Icon: React.FC<IconProps> = ({ text, image }) => {
  return (
    <Image 
      source={image}
    />
  )
}

export default NavBar
