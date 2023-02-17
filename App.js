import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Index from './components';
import Login from './components/login';
import SignUp from './components/signup';
import Favourate from "./components/favourite";
import { Provider } from "react-redux";
import store from "./components/Store/store";
const Drawer = createDrawerNavigator();
export default function App() {

  return (
    <Provider store={store}>
     <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "white",
            zIndex: 50,
          },
          drawerPosition: "right",
        }}>
      <Drawer.Screen name="Sign up" component={SignUp} options={{headerShown: false}}/>
      <Drawer.Screen name="Log in" component={Login} options={{headerShown: false}}/>
      <Drawer.Screen name="Index" component={Index} options={{headerShown: false}}/>
      <Drawer.Screen name="Favourate" component={Favourate} options={{headerShown: false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
