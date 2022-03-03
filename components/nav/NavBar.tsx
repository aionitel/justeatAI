import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, Animated } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import CameraPage from '../../pages/CameraPage';
import Profile from '../../pages/Profile';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { currPageAtom } from '../../state/atoms';
import { useRecoilState } from 'recoil';
import NavIcon from './NavIcon';

const Tab = createBottomTabNavigator()

const NavBar = ({ navigation }: any) => {

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
            }
          }}
        >
          <Tab.Screen name='Home' component={Home}
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <NavIcon 
                  navigation={navigation}
                  path='Home'
                  iconName='home'
                  iconLib={Feather}
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
                  speed: 15,
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
                  iconLib={SimpleLineIcons}
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
                  speed: 15,
                  bounciness: 5
                }).start();
          
                navigation.navigate('CameraPage')
          
                setCurrPage('CameraPage')
              }
            })}
          />
          <Tab.Screen name='Profile' component={Profile}
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <NavIcon 
                  navigation={navigation}
                  path='Profile'
                  iconName='chart-bell-curve'
                  iconLib={MaterialCommunityIcons}
                  toValue={262}
                  tabOffSetValue={tabOffSetValue}
                  currPage={currPage}
                  setCurrPage={setCurrPage}
                />
              )
            })}
            listeners={({ navigation }) => ({
              tabPress: e => {

                Animated.spring(tabOffSetValue, {
                  toValue: 262,
                  useNativeDriver: true,
                  speed: 15,
                  bounciness: 5
                }).start();
          
                navigation.navigate('Profile')
          
                setCurrPage('Profile')
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