import React from 'react'
import { ViewBase, View, Text, TouchableOpacity, SafeAreaView, Image, ImageSourcePropType } from 'react-native'
import { useRecoilState } from 'recoil'
import { calorieAtom } from '../../state/atoms'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ProfileCard = () => {
  const [calories, setCalories] = useRecoilState(calorieAtom)

  return (
    <SafeAreaView style={{
      height: 50,
      backgroundColor: 'darkgray',
      borderRadius: 15,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <ProfilePic calories={calories} />
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          borderRadius: 30,
          marginRight: 20
        }}
      >
        <Text style={{ paddingHorizontal: 12, paddingVertical: 8, fontWeight: 'bold', color: 'white' }}>{calories} calories</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons 
          name='settings-sharp' 
          size={40}
          style={{
            color: 'black',
            marginBottom: 140,
            marginRight: 25
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

interface ProfilePicProps {
  calories: number
}

const ProfilePic: React.FC<ProfilePicProps> = ({ calories }) => {
  return (
    <View style={{ flexDirection: 'row', position: 'relative' }}>
      <Image 
        source={require('../../assets/images/astro_burger.png')} 
        style={{
          height: 100,
          width: 100,
          borderRadius: 80,
          borderWidth: 4,
          borderColor: 'black',
          marginLeft: 30
        }}  
      />
      <TouchableOpacity style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginLeft: 100,
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 30,
      }}>
        <MaterialCommunityIcons name='pencil' style={{ fontSize: 25, color: 'white' }}/>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileCard