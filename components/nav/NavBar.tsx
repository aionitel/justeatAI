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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// TODO: make navbar work with touchable opacity 

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
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Octicons name='home' size={size + 10} />
                </TouchableOpacity>
              )
            })}
          />
          <Tab.Screen name='Camera' component={Camera} 
            options={({ navigation }) => ({
              tabBarIcon: ({ size, focused, color}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                  <SimpleLineIcons name='camera' size={size + 10} />
                </TouchableOpacity>
              )
            })}
          />
          <Tab.Screen name='Journal' component={Journal} 
            options={({ navigation }) => ({
              tabBarIcon: ({ size, focused, color}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Journal')}>
                  <MaterialCommunityIcons name='book-account-outline' size={size + 10} />
                </TouchableOpacity>
              )
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default NavBar