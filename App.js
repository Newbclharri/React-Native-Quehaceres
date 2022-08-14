import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import { useDimensions } from '@react-native-community/hooks';

import Home from './app/screens/Home';
import Detail from './app/screens/Detail';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Detail' component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};