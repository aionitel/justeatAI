import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Camera as PytorchCamera } from 'react-native-pytorch-core'

const Camera = () => {
  return (
    <View>
      <PytorchCamera />
    </View>
  )
}

export default Camera
