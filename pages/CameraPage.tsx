import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, SafeAreaView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useRecoilState } from 'recoil';
import { currPageAtom } from '../state/atoms';
import Modal from 'react-native-modal'
import Camera from '../components/camera/Camera';

const CameraPage: React.FC<any> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <Modal style={{ flex: 1 }} isVisible={modalVisible}>
        <Button title='Close Modal' onPress={() => setModalVisible(false)} />
        <Camera />
      </Modal>
      <Button title='Open modal' onPress={() => setModalVisible(true)} />
    </SafeAreaView>
  )
}

export default CameraPage