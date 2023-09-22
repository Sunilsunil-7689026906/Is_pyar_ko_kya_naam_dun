import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/Screens/Login'
import SignUp from './src/Screens/SignUp'
import Home from './src/Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App