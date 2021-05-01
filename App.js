import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Games1 from './Games1';
import Games2 from './Games2';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Jempol Naga" component={Games1}
          />
          <Stack.Screen name="Games2" component={Games2} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
