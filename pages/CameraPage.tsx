import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, SafeAreaView, Image } from 'react-native';
import Modal from 'react-native-modal'
import Camera from '../components/camera/Camera';
import { predictionAtom, photoAtom } from '../state/atoms';
import { useRecoilValue, useRecoilState } from 'recoil';
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'
import { decodeJpeg, fetch as ExpoFetch } from '@tensorflow/tfjs-react-native';

const CameraPage: React.FC<any> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [photo, setPhoto] = useRecoilState(photoAtom)
  const [prediction, setPrediction] = useRecoilState(predictionAtom)

  useEffect(() => {
    const readyTF = async () => {
      await tf.setBackend('rn-webgl')
      console.log('TF backend is ready.')
      await tf.ready()
      console.log('TF ready.')
    }

    readyTF()

  },[])

  const predict = async () => {
    setLoading(true)

    // load model
    const model = await mobilenet.load()

    const res = await ExpoFetch(photo.uri, {}, { isBinary: true })
    const imageArrayDataBuffer = await res.arrayBuffer()
    const imageData = new Uint8Array(imageArrayDataBuffer)

    // decode image to tensor
    const imageTensor = decodeJpeg(imageData, 3)

    console.log(`Image tensor: ${imageTensor}`)

    const prediction = await model.classify(imageTensor)

    console.log(`Prediction array: ${prediction}`)

    setLoading(false)
    setPrediction(prediction[0].className)
  }

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <Modal style={{ flex: 1 }} isVisible={modalVisible}>
        <View style={{ marginTop: 20 }}>
          <Button title='Close Modal' onPress={() => setModalVisible(false)} />
        </View>
        <Camera />
      </Modal>
      <Button title='Open modal' onPress={() => setModalVisible(true)} />
      <Button title='CLASSIFY' onPress={() => predict()} />
      <Button title='CLEAR' onPress={() => setPhoto(null)} />
      {prediction ? <Text>{prediction}</Text> : <Text>There is no prediction.</Text>}
      {loading ? <Text>LOADING</Text> : <Text>Not loading</Text>}
      {photo ? <Image source={{ uri: photo.uri }} style={{ flex: 1, height: 100, width: 400 }} /> : <Text>No photo available</Text>}
    </SafeAreaView>
  )
}

export default CameraPage