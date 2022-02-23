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

let opacity: number = 0.1

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
                  toValue={5}
                  tabOffSetValue={tabOffSetValue}
                />
              )
            })}
          />
          <Tab.Screen name='Camera' component={Camera}
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <Icon 
                  navigation={navigation}
                  path='Camera'
                  iconName='camera'
                  iconLib={SimpleLineIcons}
                  toValue={138}
                  tabOffSetValue={tabOffSetValue}
                />
              )
            })}
          />
          <Tab.Screen name='Journal' component={Journal} 
            options={({ navigation }) => ({
              tabBarIcon: ({ size }) => (
                <Icon 
                  navigation={navigation}
                  path='Journal'
                  iconName='bookmark'
                  iconLib={Feather}
                  toValue={270}
                  tabOffSetValue={tabOffSetValue}
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
        left: 54,
        transform: [
          { translateX: tabOffSetValue }
        ]
      }} />
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
  tabOffSetValue: Animated.Value
}

const Icon: React.FC<IconProps> = ({ navigation, path, iconName, iconLib, toValue, tabOffSetValue }) => {
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
    }}>
      <SpecificIconLib name={iconName} size={32} />
    </TouchableOpacity>
  )
}

export default NavBar