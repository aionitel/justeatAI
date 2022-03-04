import React from 'react'
import { ViewBase, View, Text, ScrollView } from 'react-native'
import NavBar from '../components/nav/NavBar'
import Camera from '../components/camera/Camera'
import ProfileCard from '../components/profile/ProfileCard'
import MealCard from '../components/profile/MealCard'

const Home = () => {
  return (
    <View style={{ backgroundColor: 'ghostwhite', flex: 1 }}>
      <ProfileCard />
      <ScrollView>
        <MealCard image={require('../assets/images/coffee.png')} title='Breakfast' />
        <MealCard image={require('../assets/images/salad.png')} title='Lunch' />
        <MealCard image={require('../assets/images/burger.png')} title='Dinner' />
        <MealCard image={require('../assets/images/cone.png')} title='Dessert' />
      </ScrollView>
    </View>
  )
}

export default Home
