import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, SafeAreaView } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
import Entypo from 'react-native-vector-icons/Entypo'
import { photoAtom } from '../../state/atoms';
import { useRecoilState } from 'recoil';

const Camera: React.FC<any> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);
  const [photo, setPhoto] = useRecoilState(photoAtom)
  const [camera, setCamera] = useState<any>(null)

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

  const takePicture = async () => {
    const options = { quality: 0.2, base64: true, skipProcessing: false }

    const { uri: photo } = await camera.takePictureAsync(options)

    setPhoto(photo)
  }

  return (
    <View style={{ flex: 1, position: 'relative', justifyContent: 'flex-end'  }}>
      <ExpoCamera style={{ flex: 1 }} type={type} ref={ref => setCamera(ref)}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ flex: 1, marginTop: 50, marginLeft: 50 }}
            onPress={() => {
              setType(
                type === ExpoCamera.Constants.Type.back
                  ? ExpoCamera.Constants.Type.front
                  : ExpoCamera.Constants.Type.back
              );
            }}>
            <Text style={{ flex: 1 }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </ExpoCamera>
      <TouchableOpacity style={{ flex: 1, position: 'absolute', alignSelf: 'center' }} onPress={() => takePicture()}>
        <Entypo name='circle' style={{ color: 'white' }} size={75} />
      </TouchableOpacity>
    </View>
  )
}

export default Camera 