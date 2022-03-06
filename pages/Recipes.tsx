import React from 'react'
import { ViewBase, View, Text, SafeAreaView, ScrollView , Button } from 'react-native'
import Camera from '../components/camera/Camera'

const Recipes: React.FC = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title='go back' onPress={() => navigation.goBack()} />
    </SafeAreaView>
  )
}

export default Recipes