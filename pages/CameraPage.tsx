import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollViewComponent, ScrollView } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useRecoilState } from 'recoil';
import { currPageAtom } from '../state/atoms';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native'

const TensorCamera = cameraWithTensors(ExpoCamera)

const CameraPage: React.FC<any> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  const handleBack = () => {
    navigation.navigate('Profile')
    setCurrPage('Profile')
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
        // Tensor related props
        cameraTextureHeight={1920}
        cameraTextureWidth={1080}
        resizeHeight={200}
        resizeWidth={152}
        resizeDepth={3}
        autorender={true}
      />
      <View>
        <MaterialIcons name='arrow-back-ios' size={50} onPress={() => handleBack()}/>
      </View>
    </View>
  )
}

export default CameraPage