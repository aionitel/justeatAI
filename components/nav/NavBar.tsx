import React, { ComponentType } from 'react'
import { ViewBase, View, Text, SafeAreaView, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Camera from '../../pages/Camera';
import Journal from '../../pages/Journal';
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName='Home'
          screenOptions={{ 
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen name='Home' component={Home} 
            options={{
              tabBarIcon: ({ size, focused, color}) => (
                <Octicons name='home' size={size + 10} />

              )
            }}
          />
          <Tab.Screen name='Camera' component={Camera} 
            options={{
              tabBarIcon: ({ size, focused, color}) => (
                <SimpleLineIcons name='camera' size={size} />

              )
            }}
          />
          <Tab.Screen name='Journal' component={Journal} 
            options={{
              tabBarIcon: ({ size, focused, color}) => (
                <FontAwesome5 name='journal-whills' size={size} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

interface IconProps {
  image: ImageSourcePropType
  size: number
}

export default NavBar
