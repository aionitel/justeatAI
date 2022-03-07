import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal'
import Camera from '../components/camera/Camera';
import { predictionAtom } from '../state/atoms';
import { useRecoilValue } from 'recoil';

const CameraPage: React.FC<any> = ({ navigation }) => {
  const currPrediction = useRecoilValue(predictionAtom)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <Modal style={{ flex: 1 }} isVisible={modalVisible}>
        <View style={{ marginTop: 20 }}>
          <Button title='Close Modal' onPress={() => setModalVisible(false)} />
        </View>
        <Camera />
      </Modal>
      <Button title='Open modal' onPress={() => setModalVisible(true)} />
      {currPrediction && <Text>There is a prediction</Text>}
    </SafeAreaView>
  )
}

export default CameraPage