import React, { ComponentType } from 'react'
import { ViewBase, View, Text, SafeAreaView, Image, ImageSourcePropType } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Camera from '../../pages/Camera';
import Journal from '../../pages/Journal';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                <Icon size={size} image={require('../../assets/icons/home.png')} />
              )
            }}
          />
          <Tab.Screen name='Camera' component={Camera} 
            options={{
              tabBarIcon: ({ size, focused, color}) => (
                <Icon size={size} image={require('../../assets/icons/camera.png')} />
              )
            }}
          />
          <Tab.Screen name='Journal' component={Journal} 
            options={{
              tabBarIcon: ({ size, focused, color}) => (
                <Icon size={size} image={require('../../assets/icons/journal.png')} />
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

const Icon: React.FC<IconProps> = ({ image, size }) => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={image} style={{
          height: size,
          width: size
        }} />
      </View>
    </TouchableOpacity>
  )
}

export default NavBar
