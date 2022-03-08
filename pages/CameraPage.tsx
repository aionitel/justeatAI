import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, SafeAreaView, Image } from 'react-native';
import Modal from 'react-native-modal'
import Camera from '../components/camera/Camera';
import { predictionAtom, photoAtom } from '../state/atoms';
import { useRecoilValue } from 'recoil';
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'

const CameraPage: React.FC<any> = ({ navigation }) => {
  const currPrediction = useRecoilValue(predictionAtom)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const photo = useRecoilValue(photoAtom)

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
      {photo ? <Image source={{ uri: photo }} style={{ flex: 1, height: 100, width: 400 }} /> : <Text>No photo available</Text>}
    </SafeAreaView>
  )
}

export default CameraPage