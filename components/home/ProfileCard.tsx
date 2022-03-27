import React from 'react'
import { ViewBase, View, Text, TouchableOpacity, SafeAreaView, Image, ImageSourcePropType } from 'react-native'
import { useRecoilState } from 'recoil'
import { calorieAtom, themeAtom } from '../../state/atoms'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modal'
import Settings from '../settings/Settings'

const ProfileCard = () => {
  const [calories, setCalories] = useRecoilState(calorieAtom)

  const [currTheme, setCurrTheme] = useRecoilState(themeAtom)

  const switchTheme = () => {
    if (currTheme === 'light') {
      setCurrTheme('dark')
    } else {
      setCurrTheme('light')
    }
  }

  return (
    <SafeAreaView style={{
      height: 50,
      backgroundColor: currTheme === 'dark' ? 'gray' : 'skyblue',
      borderRadius: 15,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <ProfilePic calories={calories} currTheme={currTheme} />
      <TouchableOpacity
        style={{
          backgroundColor: currTheme === 'dark' ? 'dimgray' : 'white',
          borderRadius: 30,
          marginRight: 20
        }}
      >
        <Text style={{ paddingHorizontal: 12, paddingVertical: 8, fontWeight: 'bold', color: currTheme === 'dark' ? 'white' : 'black' }}>{calories} calories</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons 
          name='settings-sharp' 
          size={40}
          style={{
            color: 'white',
            marginBottom: 140,
            marginRight: 25
          }}
          onPress={() => switchTheme()}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

interface ProfilePicProps {
  calories: number,
  currTheme: string
}

const ProfilePic: React.FC<ProfilePicProps> = ({ calories, currTheme }) => {
  return (
    <View style={{ flexDirection: 'row', position: 'relative' }}>
      <Image 
        source={require('../../assets/images/astro_burger.png')} 
        style={{
          height: 100,
          width: 100,
          borderRadius: 80,
          borderWidth: 4,
          borderColor: currTheme === 'dark' ? 'dimgray' : 'white',
          marginLeft: 30
        }}  
      />
      <TouchableOpacity style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginLeft: 100,
        backgroundColor: currTheme === 'dark' ? 'dimgray' : 'white',
        padding: 5,
        borderRadius: 30,
      }}>
        <MaterialCommunityIcons name='pencil' style={{ fontSize: 25, color: currTheme === 'dark' ? 'white' : 'black' }}/>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileCard