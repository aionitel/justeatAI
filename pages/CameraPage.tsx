import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollViewComponent, ScrollView, Button } from 'react-native';
import { Camera } from 'expo-camera';

const CameraPage = ({ navigation }: any) => {
  navigation.setOptions({ tabBarVisible: false })
  return (
    <Button
      title='Go to thing'
      onPress={() => navigation.navigate('Camera')}
    />
  )
}

export default CameraPage