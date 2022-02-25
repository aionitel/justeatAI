import React from 'react'
import { ViewBase, View, Text, TouchableOpacity, SafeAreaView, Image, ImageSourcePropType } from 'react-native'
import { useRecoilState } from 'recoil'
import calorieAtom from '../../state/atoms'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ProfileCard = () => {
  const [calories, setCalories] = useRecoilState(calorieAtom)

  return (
    <SafeAreaView style={{
      backgroundColor: 'lightblue',
      paddingBottom: 40,
      height: 220,
      borderRadius: 15,
    }}>
      <ProfilePic calories={calories} />
    </SafeAreaView>
  )
}

interface ProfilePicProps {
  calories: number
}

const ProfilePic: React.FC<ProfilePicProps> = ({ calories }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <Image 
        source={require('../../assets/images/astro_burger.png')} 
        style={{
          height: 100,
          width: 100,
          marginLeft: 35,
          marginTop: 25,
          borderRadius: 80,
          borderWidth: 4,
          borderColor: 'ghostwhite'
        }}  
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          marginLeft: 20,
          marginTop: 25,
          borderRadius: 30
        }}
      >
        <Text style={{ paddingHorizontal: 12, paddingVertical: 8, fontWeight: 'bold', }}>{calories} calories</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons 
          name='settings-sharp' 
          size={40}
          style={{
            color: 'white',
            marginLeft: 50,
            marginBottom: 75,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ProfileCard