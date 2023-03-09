import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import Login from './views/Login';
import Rastreio from './views/Rastreio';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title:"WEFLOG",
            headerStyle:{backgroundColor:"#F58634"},
            headerTintColor: '#333',
            headerTitleStyle:{fontWeight: 'bold', alignSelf: 'center'}
          }} 
        />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        {/*<Stack.Screen name="AreaResrita" component={AreaResrita} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//export default App;


