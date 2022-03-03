import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, Animated } from 'react-native'
import { SetterOrUpdater, useRecoilState } from 'recoil';

interface NavIconProps {
  navigation: any,
  path: string,
  iconName: string,
  iconLib: any,
  toValue: number,
  tabOffSetValue: any,
  currPage: string,
  setCurrPage: SetterOrUpdater<string>
}

const NavIcon: React.FC<NavIconProps> = ({ navigation, path, iconName, iconLib, tabOffSetValue, toValue, currPage, setCurrPage }) => {
  const SpecificIconLib = iconLib;

  return (
    <TouchableOpacity onPress={() => {

      Animated.spring(tabOffSetValue, {
        toValue,
        useNativeDriver: true,
        speed: 15,
        bounciness: 5
      }).start();

      navigation.navigate(path)

      setCurrPage(path)

    }}>
      <SpecificIconLib name={iconName} size={25} style={{ color: toValue === 262 ? 'black' : 'gray'}} />
    </TouchableOpacity>
  )
}

export default NavIcon