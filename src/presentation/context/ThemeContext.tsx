import { PropsWithChildren, createContext } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider, adaptNavigationTheme } from "react-native-paper";
import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
  } from '@react-navigation/native';


const { LightTheme , DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,

});

export const ThemeContext = createContext({
    isDark: false,
    theme:LightTheme
})


export const ThemeContextProvider = ({children}: PropsWithChildren) => {
    
    const colorScheme = useColorScheme();

    
    const isDark = colorScheme ==='dark';
    const theme = isDark ? DarkTheme : LightTheme;


    return (
    <PaperProvider theme={ theme}>
        <NavigationContainer theme={theme}>
            <ThemeContext.Provider value ={{
                isDark,
                theme,
            }}>

            </ThemeContext.Provider>
                { children }
        </NavigationContainer>
      </PaperProvider>
    )
}