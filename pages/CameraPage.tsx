import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, SafeAreaView } from 'react-native';
import { useRecoilState } from 'recoil';
import { currPageAtom } from '../state/atoms';
import Camera from '../components/camera/Camera'
import Modal from 'react-native-modal'

const CameraPage: React.FC<any> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        isVisible={modalVisible}
        backdropColor='white'
        backdropOpacity={1}
      >
        <View style={{ marginTop: 20 }}>
          <Button title='close modal' onPress={() => toggleModal()} />
        </View>
        <Camera navigation={navigation} />
      </Modal>
      <Button title='open modal' onPress={() => toggleModal()} />
    </SafeAreaView>
  )
}

export default CameraPage