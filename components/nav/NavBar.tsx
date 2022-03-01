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
import { SetterOrUpdater, useRecoilState } from 'recoil';

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
              height: 100,
              borderRadius: 30,
              overflow: 'hidden',
              position: 'absolute',
              display: currPage === 'CameraPage' ? 'none' : 'flex'
            }
          }}
        >
          <Tab.Screen name='Home' component={Home}
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <Icon 
                  navigation={navigation}
                  path='Home'
                  iconName='home'
                  iconLib={Feather}
                  toValue={0}
                  tabOffSetValue={tabOffSetValue}
                  setCurrPage={setCurrPage}
                />
              )
            })}
          />
          <Tab.Screen name='CameraPage' component={CameraPage}
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <Icon 
                  navigation={navigation}
                  path='CameraPage'
                  iconName='camera'
                  iconLib={SimpleLineIcons}
                  toValue={131}
                  tabOffSetValue={tabOffSetValue}
                  setCurrPage={setCurrPage}
                />
              )
            })}
          />
          <Tab.Screen name='Profile' component={Profile}
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <Icon 
                  navigation={navigation}
                  path='Profile'
                  iconName='chart-bell-curve'
                  iconLib={MaterialCommunityIcons}
                  toValue={262}
                  tabOffSetValue={tabOffSetValue}
                  setCurrPage={setCurrPage}
                />
              )
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

interface IconProps {
  navigation: any,
  path: string,
  iconName: string,
  iconLib: any,
  toValue: number,
  tabOffSetValue: Animated.Value,
  setCurrPage: SetterOrUpdater<string>
}

const Icon: React.FC<IconProps> = ({ navigation, path, iconName, iconLib, toValue, tabOffSetValue, setCurrPage }) => {
  const SpecificIconLib = iconLib;

  return (
    <TouchableOpacity onPress={() => {

      navigation.navigate(path)

      Animated.spring(tabOffSetValue, {
        toValue,
        useNativeDriver: true,
        speed: 15,
        bounciness: 5
      }).start();

      setCurrPage(path)

    }}>
      <SpecificIconLib name={iconName} size={32} />
    </TouchableOpacity>
  )
}

export default NavBar