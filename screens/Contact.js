import React from 'react'
import { View, Text } from 'react-native'

export default ({pokemon, teste}) => {
  // console.warn('>>>', props)

  teste()
  return (
    <View>
      <Text style={{fontSize: 40}}>Tela #3 = {pokemon}</Text>
    </View>
  )
}
