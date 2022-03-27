import React from 'react'
import { ViewBase, View, Text, ScrollView } from 'react-native'
import NavBar from '../components/nav/NavBar'
import Camera from '../components/camera/Camera'
import ProfileCard from '../components/home/ProfileCard'
import MealCard from '../components/home/MealCard'
import { themeAtom } from '../state/atoms'
import { useRecoilValue } from 'recoil'

// Home page with calorie and user info
const Home = () => {
  const currTheme = useRecoilValue(themeAtom)

  return (
    <View style={{ backgroundColor: currTheme === 'dark' ? 'black' : 'white', flex: 1 }}>
      <ProfileCard />
      <ScrollView>
        <MealCard image={require('../assets/images/coffee.png')} title='Breakfast' />
        <MealCard image={require('../assets/images/salad.png')} title='Lunch' />
        <MealCard image={require('../assets/images/burger.png')} title='Dinner' />
        <MealCard image={require('../assets/images/cone.png')} title='Snack' />
      </ScrollView>
    </View>
  )
}

export default Home
