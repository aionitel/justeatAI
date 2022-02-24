import React from 'react'
import { ViewBase, View, Text, SafeAreaView, ScrollView } from 'react-native'
import ProfileCard from '../components/profile/ProfileCard'

const Profile: React.FC = () => {
  return (
    <>
      <ProfileCard />
      <ScrollView>
        <Text>Hello</Text>
      </ScrollView>
    </>
  )
}

export default Profile
