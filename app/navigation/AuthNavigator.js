import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack=createStackNavigator();
const AuthNavigator=()=>(
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
    }}>
        <Stack.Screen name='Login Screen' component={LoginScreen}/>
        <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;