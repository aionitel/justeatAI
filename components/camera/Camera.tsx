import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, SafeAreaView } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';

const Camera: React.FC<any> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);

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

  }

  return (
    <View style={{ flex: 1, }}>
      <ExpoCamera style={{ flex: 1 }} type={type}>
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
    </View>
  )
}

export default Camera 