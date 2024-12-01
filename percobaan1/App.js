import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import Ulasan from './Ulasan';
import Chara from './Chara';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


//nav untuk home
function HomeDrawerNavigator(){
  return (
      <Drawer.Navigator initialRouteName='HomeDrawer'>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name='List' component={DetailScreen}/>
        <Drawer.Screen name="Characters" component={Chara} />
      </Drawer.Navigator>
  );
}

//komponen utama app
export default function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const checkLoginStatus = async () => {
        const token = await AsyncStorage.getItem('userToken');
        setIsLoggedIn(!!token);
      };
      checkLoginStatus();
    }, []);
  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"}>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeDrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

