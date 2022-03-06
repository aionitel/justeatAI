import React, { useState, useRef, useEffect } from "react";
import { ViewBase, View, Text, Animated } from "react-native";
import { Camera as ExpoCamera } from 'expo-camera'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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

  return (
    <View style={{ flex: 1, height: 300 }}>
      <ExpoCamera 
        type={type}
      />
      <View>
        <MaterialIcons name='arrow-back-ios' size={50} onPress={() => navigation.navigate('Recipes')}/>
      </View>
    </View>
  )
}

export default Camera