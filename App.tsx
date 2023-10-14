import React from 'react';
import { LayoutScreen1 } from './src/component/screen01/LayoutScreen1';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LayoutScreen2 } from './src/component/screen02/LayoutScreen2';
import {LayoutScreen3} from './src/component/screen03/LayoutScreen3'
import { LayoutScreen4 } from './src/component/screen04/LayoutScreen4';
import { LayoutScreen5 } from './src/component/screen05/LayoutScreen5';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen name="Screen01" component={LayoutScreen1} /> 
        <Stack.Screen name="Screen02" component={LayoutScreen2} /> 
        <Stack.Screen name='Screen03' component={LayoutScreen3} /> 
        <Stack.Screen name='Screen04' component={LayoutScreen4}/> 
        <Stack.Screen name='Screen05' component={LayoutScreen5}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
