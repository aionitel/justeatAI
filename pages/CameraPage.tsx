import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollViewComponent, ScrollView } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useRecoilState } from 'recoil';
import { currPageAtom } from '../state/atoms';

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
      <ExpoCamera type={type} style={{ flex: 1 }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === ExpoCamera.Constants.Type.back
                  ? ExpoCamera.Constants.Type.front
                  : ExpoCamera.Constants.Type.back
              );
            }}>
            <Text> Flip </Text>
          </TouchableOpacity>
          <MaterialIcons name='arrow-back-ios' size={100} onPress={() => handleBack()}/>
        </View>
      </ExpoCamera>
    </View>
  );
}

export default CameraPage