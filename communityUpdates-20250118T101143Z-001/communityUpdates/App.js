import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import Login from './src/pages/login';
import SignUP from './src/pages/signUP';
import Home from './src/pages/home';
import Preview from "./src/pages/preview";


const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer >
      <Stack.Navigator initialRoutname = "preview">
        <Stack.Screen name="preview" component= {Preview}/>
        <Stack.Screen name="login" component= {Login}/>
        <Stack.Screen name="signUP" component= {SignUP}/>
        <Stack.Screen name="home" component= {Home}/>
      </Stack.Navigator>
    </NavigationContainer>


    );
  };

export default App;
