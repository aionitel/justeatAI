import React from 'react'
import { ViewBase, View, Text, SafeAreaView, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Settings from '../pages/Settings';

const Tab = createBottomTabNavigator();

const NavData = [
  {
    text: 'Home',
    image: require('../assets/icons/home.png')
  }
]

const homeName = 'Home'
const detailsName ='Details'
const settingsName = 'Settings'

const NavBar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{ 
            headerShown: false
          }}
        >
          <Tab.Screen name={homeName} component={Home} />
          <Tab.Screen name={settingsName} component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
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
