import React from 'react'
import { ViewBase, View, Text, ScrollView } from 'react-native'
import NavBar from '../components/nav/NavBar'
import Camera from '../components/camera/Camera'
import ProfileCard from '../components/profile/ProfileCard'

const Home = () => {
  return (
    <View style={{ backgroundColor: 'ghostwhite', flex: 1 }}>
      <ProfileCard />
    </View>
  )
}

export default Home
