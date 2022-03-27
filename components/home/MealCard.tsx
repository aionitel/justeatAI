import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageSourcePropType, } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { themeAtom } from '../../state/atoms'
import { useRecoilValue } from 'recoil'

interface MealCardProps {
  image: ImageSourcePropType,
  title: string,
}

const iconSize = 40;

const MealCard: React.FC<MealCardProps> = ({ image, title }) => {
  const currTheme = useRecoilValue(themeAtom)

  return (
    <View style={{ flexDirection: 'row', marginTop: 30, paddingBottom: 30 , marginHorizontal: 30, justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'gainsboro'}}>
      <Image source={image} style={{ height: iconSize, width: iconSize }}/>
      <Text 
        style={{ marginRight: 135, marginTop: 5, fontWeight: 'bold', color: currTheme === 'dark' ? 'white' : 'gray' }}
      >{title}</Text>
      <TouchableOpacity>
        <AntDesign name='pluscircle' size={40} style={{ color: currTheme === 'dark' ? 'white' : 'black' }} />
      </TouchableOpacity>
    </View>
  )
}

export default MealCard
