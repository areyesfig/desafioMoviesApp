import { createStackNavigator } from "@react-navigation/stack";
import { SearchScreen } from "../screens/search/SearchScreen";
import { DetailScreen } from "../screens/detail/DetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FavoriteScreen } from "../screens/favorite/FavoriteScreen";




export type RootStackParams = {
    SearchScreen:undefined,
    DetailScreen: {movie :Movie},
    FavoriteScreen:undefined
    
}


const Stack = createStackNavigator<RootStackParams>();

 export const StackNavigator = () => {
     return (
        <Stack.Navigator screenOptions={{
             headerShown:false
         }}>
             <Stack.Screen name="SearchScreen" component={SearchScreen}/>
             <Stack.Screen name="DetailScreen" component={DetailScreen}/>
             <Stack.Screen name="FavoriteScreen" component={FavoriteScreen}/>
         </Stack.Navigator>
     )
    
 }
