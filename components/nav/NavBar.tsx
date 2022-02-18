import React, { ComponentType } from 'react'
import { ViewBase, View, Text, SafeAreaView, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Camera from '../../pages/Camera';
import Journal from '../../pages/Journal';
import Octicons from 'react-native-vector-icons/Octicons' // home icon
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons' // camera icon
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5' // star wars book
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' // notepad icon

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
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              height: 70
            }
          }}
        >
          <Tab.Screen name='Home' component={Home} 
            options={({ navigation }) => ({
              tabBarIcon: ({ size, focused, color}) => (
                <NavIcon path='Home' iconLib={Octicons} iconName='home' size={size} navigation={navigation} />
              )
            })}
          />
          <Tab.Screen name='Camera' component={Camera} 
            options={({ navigation }) => ({
              tabBarIcon: ({ size, focused, color}) => (
                <NavIcon path='Camera' iconLib={SimpleLineIcons} iconName='camera' size={size} navigation={navigation} />
              )
            })}
          />
          <Tab.Screen name='Journal' component={Journal} 
            options={({ navigation }) => ({
              tabBarIcon: ({ size, focused, color}) => (
                <NavIcon path='Journal' iconLib={FontAwesome5} iconName='book' size={size} navigation={navigation} />
              )
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

interface NavIconProps {
  path: string,
  iconLib: any,
  iconName: string,
  size: number,
  navigation: any
}

const NavIcon: React.FC<NavIconProps> = ({ path, iconLib, iconName, size, navigation }) => {
  const SpecificIconLib = iconLib;

  return (
    <TouchableOpacity onPress={() => navigation.navigate(path)}>
      <SpecificIconLib name={iconName} size={size + 12} />
    </TouchableOpacity>
  )
}

export default NavBar