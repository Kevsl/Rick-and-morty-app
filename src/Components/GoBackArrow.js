import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { HomeStyle } from '../Style/View/HomeStyle'

export const GoBackArrow = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={HomeStyle.arrowContainer}
    >
      <Text style={HomeStyle.arrow}>{'<'}</Text>
    </TouchableOpacity>
  )
}
