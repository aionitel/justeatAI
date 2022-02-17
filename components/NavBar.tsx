import React from 'react'
import { ViewBase, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { RiHome3Line as WhiteHouse } from 'react-icons/ri'
import { IconType } from 'react-icons'

const NavBar = () => {
  return (
    <View>
      <Icon icon={WhiteHouse} text='Home' />
    </View>
  )
}

interface IconProps {
  icon: IconType,
  text: string
}

export const Icon: React.FC<IconProps> = ({ icon, text }) => {
  return (
    <TouchableOpacity>
      <View>
        <WhiteHouse />
      </View>
    </TouchableOpacity>
  )
}

export default NavBar;