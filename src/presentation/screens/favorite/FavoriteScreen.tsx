import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigator/StackNavigator';


interface Props extends StackScreenProps<RootStackParams, 'FavoriteScreen'>{}

export const FavoriteScreen = ({navigation, route}: Props) => {
  return (
    <View>
        <Text>FavoriteScreen</Text>
        </View>
  )
}
