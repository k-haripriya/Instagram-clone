import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationStackParams } from '../Types/Types';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import MainScreen from '../Screens/MainScreen/MainScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import SavedPostsScreen from '../Screens/SavedPostsScreen/SavedPostsScreen';

const Navigation = () => {
    const Stack = createNativeStackNavigator<NavigationStackParams>();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
            <Stack.Screen name='SplashScreen' component={SplashScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='MainScreen' component={MainScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation