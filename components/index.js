import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from "./Details";
import Home from "./home";


const Stack = createNativeStackNavigator();
export default function Index() {

  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator> 
        <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
