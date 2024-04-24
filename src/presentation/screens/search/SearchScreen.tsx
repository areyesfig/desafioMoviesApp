import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Pressable, Image } from 'react-native';
import axios from 'axios';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/StackNavigator';
import { MovieCard } from '../../components/movies/MovieCard';
import { Search } from '../../../infrastructure/interfaces/movieApi.interfaces';
import { ActivityIndicator } from 'react-native-paper';



export const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Search[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const searchScreen = async () => {
    
    try {
      setLoading(true);
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=1c3296b4`);
      setSearchResults(response.data.Search || []);
      setError('');
    } catch (error) {
      setSearchResults([]);
      setError('Error al buscar películas. Por favor, inténtelo de nuevo.');
    } finally {
      setLoading(false);
    }
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };


  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Buscar Película"
        value={searchTerm}
        onChangeText={(text) => {
          if (text === '') {
            clearSearch();
          } else {
            setSearchTerm(text);
          }}
        }
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
      />
      <Button title="Buscar" onPress={searchScreen} />

      <View style={{ marginBottom: 10 }} />

      <Button title="Favoritas" onPress={() => navigation.navigate('FavoriteScreen')} />
      {loading && <ActivityIndicator style={{ paddingTop: 20 }}/>}
     
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <MovieCard poster={item.Poster} Title={item.Title} Year={item.Year} imdbID={item.imdbID} />}
        keyExtractor={(item) => item.imdbID}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

