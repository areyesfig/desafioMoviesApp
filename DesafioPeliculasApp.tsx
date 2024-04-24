import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import { TabNavigator, StackNavigator } from './src/presentation/navigator/StackNavigator';
import { ThemeContextProvider } from './src/presentation/context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';



const queryClient = new QueryClient();

export const DesafioPeliculasApp = () => {
  return (

    <QueryClientProvider client={queryClient}>
    <ThemeContextProvider>
        <StackNavigator />
    </ThemeContextProvider>
  </QueryClientProvider>
    
  )
}
