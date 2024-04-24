
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'

import { Text } from 'react-native-paper';
import { RootStackParams } from '../../navigator/StackNavigator';


export const MovieCard = ({ poster, Title, Year ,imdbID}: Movie) => {
  
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <View style={styles.container}>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => navigation.navigate('DetailScreen', { movie: { poster, Title, Year, imdbID } })}>

        <Image source={{ uri: poster }} style={styles.poster} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{Title}</Text>
          <Text style={styles.year}>{Year}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  poster: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 16,
    color: 'gray',
  },
});
