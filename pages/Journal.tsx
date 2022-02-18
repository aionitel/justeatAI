import React from 'react'
import { ViewBase, View, Text, SafeAreaView, ScrollView } from 'react-native'
import ProfileCard from '../components/profile/ProfileCard'

const Journal = () => {
  return (
    <ScrollView>
      <ProfileCard />
    </ScrollView>
  )
}

export default Journal
