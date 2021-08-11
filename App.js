import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './app/screens/HomeScreen';
import SettingsScreen from './app/screens/SettingsScreen'
import PaidQoobsScreen from './app/screens/PaidQoobsScreen';
import LoginScreen from './app/screens/LoginScreen';
import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthStore from './app/auth/authStorage';



export default function App() {
const [user, setUser]=useState();
const [isAppReady, setIsAppReady]=useState(false);
const restoreUser = async()=>{
  const user=await AuthStore.getUser();
  if(user) setUser(user);
}

if(!isAppReady)
return(
  // this is when application is loading and we decode the token meanwhile
  <AppLoading startAsync={restoreUser} onFinish={()=> setIsAppReady(true)} onError={console.warn}/>
  );

  return (
    <AuthContext.Provider value={{user, setUser}}>
        <NavigationContainer>
          {user? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
