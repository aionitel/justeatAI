import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollViewComponent, ScrollView, Animated } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useRecoilState } from 'recoil';
import { currPageAtom } from '../state/atoms';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native'

const TensorCamera = cameraWithTensors(ExpoCamera)

const CameraPage: React.FC<any> = ({ navigation }) => {

  const tabOffSetValue = useRef(new Animated.Value(0)).current;

  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  const handleBack = () => {
    navigation.navigate('Profile')
    setCurrPage('Profile')

    Animated.spring(tabOffSetValue, {
      toValue: 262,
      useNativeDriver: true,
      speed: 15,
      bounciness: 5
    }).start();

  }

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <TensorCamera
        // Standard Camera props
        style={{ flex: 1 }}
        type={ExpoCamera.Constants.Type.front}
      />
      <View>
        <MaterialIcons name='arrow-back-ios' size={50} onPress={() => handleBack()}/>
      </View>
    </View>
  )
}

export default CameraPage