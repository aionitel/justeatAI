import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageSourcePropType, } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface MealCardProps {
  image: ImageSourcePropType,
  title: string,
}

const iconSize = 60;

const MealCard: React.FC<MealCardProps> = ({ image, title }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 25, paddingBottom: 25, marginHorizontal: 25, justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'gainsboro'}}>
      <Image source={image} style={{ height: iconSize, width: iconSize }}/>
      <Text style={{ marginRight: 135, marginTop: 5, fontWeight: 'bold'}}>{title}</Text>
      <TouchableOpacity style={{ }}>
        <AntDesign name='pluscircle' size={50} />
      </TouchableOpacity>
    </View>
  )
}

export default MealCard
