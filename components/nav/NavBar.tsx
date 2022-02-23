import React, { ComponentType, useRef } from 'react'
import { ViewBase, View, Text, SafeAreaView, Image, ImageSourcePropType, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Camera from '../../pages/Camera';
import Journal from '../../pages/Journal';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

let opacity = 1;

const NavBar = () => {
  const tabOffSetValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName='Home'
          screenOptions={{ 
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              height: 100,
              borderRadius: 30,
              overflow: 'hidden',
              position: 'absolute',
            },
          }}
        >
          <Tab.Screen name='Home' component={Home} 
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <Feather 
                  name='home'
                  style={{ opacity: opacity }}
                  onPressIn={() => {opacity = 0.1}}
                  onPressOut={() => {opacity = 1}}
                  size={30}
                />
              )
            })}
            listeners={({}) => ({
              tabPress: e => {
                Animated.spring(tabOffSetValue, {
                  toValue: 4,
                  useNativeDriver: true
                }).start();
              }
            })}
          />
          <Tab.Screen name='Camera' component={Camera} 
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <SimpleLineIcons 
                  name='camera'
                  style={{ opacity: opacity }}
                  onPressIn={() => {opacity = 0.1}}
                  onPressOut={() => {opacity = 1}}
                  size={30}
                />
              )
            })}
            listeners={({}) => ({
              tabPress: e => {
                Animated.spring(tabOffSetValue, {
                  toValue: 134,
                  useNativeDriver: true
                }).start();
              }
            })}
          />
          <Tab.Screen name='Journal' component={Journal} 
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <Feather 
                  name='bookmark'
                  style={{ opacity: opacity }}
                  onPressIn={() => {opacity = 0.1}}
                  onPressOut={() => {opacity = 1}}
                  size={30}
                />
              )
            })}
            listeners={({}) => ({
              tabPress: e => {
                Animated.spring(tabOffSetValue, {
                  toValue: 265,
                  useNativeDriver: true
                }).start();
              }
            })}
          />
        </Tab.Navigator>
        <Animated.View style={{
        width: 10,
        height: 10,
        borderRadius: 20,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 25,
        left: 54,
        transform: [
          { translateX: tabOffSetValue }
        ]
      }} />
      </NavigationContainer>
    </View>
  )
}

export default NavBar