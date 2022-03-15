import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, Animated } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import CameraPage from '../../pages/CameraPage';
import Recipes from '../../pages/Recipes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { currPageAtom, themeAtom } from '../../state/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import NavIcon from './NavIcon';

const Tab = createBottomTabNavigator()

const animationSpeed = 15;

const NavBar = ({ navigation }: any) => {
  const currTheme = useRecoilValue(themeAtom)
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

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
              height: 80,
              position: 'absolute',
              backgroundColor: currTheme === 'light' ? 'white' : 'dark'
            }
          }}
        >
          <Tab.Screen name='Home' component={Home}
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <NavIcon 
                  navigation={navigation}
                  path='Home'
                  iconName='home-variant'
                  iconLib={MaterialCommunityIcons}
                  toValue={0}
                  tabOffSetValue={tabOffSetValue}
                  currPage={currPage}
                  setCurrPage={setCurrPage}
                />
              )
            })}
            listeners={({ navigation }) => ({
              tabPress: e => {
                e.preventDefault()

                Animated.spring(tabOffSetValue, {
                  toValue: 0,
                  useNativeDriver: true,
                  speed: animationSpeed,
                  bounciness: 5
                }).start();
          
                navigation.navigate('Home')
          
                setCurrPage('Home')
              }
            })}
          />
          <Tab.Screen name='CameraPage' component={CameraPage}
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <NavIcon 
                  navigation={navigation}
                  path='CameraPage'
                  iconName='camera'
                  iconLib={MaterialCommunityIcons}
                  toValue={131}
                  tabOffSetValue={tabOffSetValue}
                  currPage={currPage}
                  setCurrPage={setCurrPage}
                />
              )
            })}
            listeners={({ navigation }) => ({
              tabPress: e => {
                e.preventDefault()

                Animated.spring(tabOffSetValue, {
                  toValue: 131,
                  useNativeDriver: true,
                  speed: animationSpeed,
                  bounciness: 5
                }).start();
          
                navigation.navigate('CameraPage')
          
                setCurrPage('CameraPage')
              }
            })}
          />
          <Tab.Screen name='Recipes' component={Recipes}
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <NavIcon 
                  navigation={navigation}
                  path='Recipes'
                  iconName='chef-hat'
                  iconLib={MaterialCommunityIcons}
                  toValue={260}
                  tabOffSetValue={tabOffSetValue}
                  currPage={currPage}
                  setCurrPage={setCurrPage}
                />
              )
            })}
            listeners={({ navigation }) => ({
              tabPress: e => {

                Animated.spring(tabOffSetValue, {
                  toValue: 260,
                  useNativeDriver: true,
                  speed: animationSpeed,
                  bounciness: 5
                }).start();
          
                navigation.navigate('Recipes')
          
                setCurrPage('Recipes')
              }
            })}
          />
        </Tab.Navigator>
          <Animated.View style={{
          width: 5,
          height: 5,
          borderRadius: 20,
          backgroundColor: 'black',
          position: 'absolute',
          bottom: 25,
          left: 62,
          opacity: 0.8,
          transform: [
            { translateX: tabOffSetValue }
          ]
        }} 
        />
      </NavigationContainer>
    </View>
  )
}

export default NavBar