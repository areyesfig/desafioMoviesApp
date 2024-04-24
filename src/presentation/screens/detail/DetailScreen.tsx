import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigator/StackNavigator';
import { MovieHeader } from '../../components/movies/MovieHeader';
import { FAB } from '../../components/ui/FAB';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ({navigation, route}: Props) => {

  const { movie } = route.params;
  console.log(movie.Title)
  return (
    <View style={{flex:1}}>
         <MovieHeader
        title={ movie!.Title}
        poster={ movie!.poster }
        year={ movie!.Year}
      />


      <FAB 
        iconName="heart-outline"
        onPress={() => console.log('holi')}
        style={{

          bottom: 10,
          right: 20,

        }}/>
    </View>
  )
}
