import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import {MaterialCommunityIcons, Ionicons, Octicons} from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PaidQoobsScreen from '../screens/PaidQoobsScreen';
import QoobDetailsScreen from '../screens/QoobDetailsScreen';
import WebViewScreen from '../screens/WebViewScreen';

const Stack=createStackNavigator();
const qoobDetailsNavigator=()=>(
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={QoobDetailsScreen} />

    </Stack.Navigator>
);
const Stack2=createStackNavigator();
const SettingsNavigator=()=>(
    <Stack2.Navigator
    initialRouteName="Settings"
    screenOptions={{
        headerShown:false
    }}>
        <Stack2.Screen name="Settings" component={SettingsScreen} />
        <Stack2.Screen name="WebView" component={WebViewScreen} />

    </Stack2.Navigator>
);

const Tab=createBottomTabNavigator();
const AppNavigator=()=>(
    <Tab.Navigator
    initialRouteName='Home'
    tabBarOptions={{
    activeBackgroundColor:'black',
    activeTintColor:'white',
    inactiveBackgroundColor:'rgb(44,44,44)',
    inactiveTintColor:'white',
    showLabel:false
    }}>
        <Tab.Screen name='Home'
        component={qoobDetailsNavigator}
        options={{
        tabBarIcon:({size, color}) => <MaterialCommunityIcons name='home' color={color} size={size} />
        }}/>
        <Tab.Screen 
        name='Paid Qoobs' 
        component={PaidQoobsScreen}
        options={{
        tabBarIcon: ({size, color}) => <Octicons name='credit-card' color={color} size={size} />
        }}
        />
        <Tab.Screen 
        name='Setting' 
        component={SettingsNavigator}
        options={{
        tabBarIcon: ({size, color}) => <Ionicons name='settings' color={color} size={size} />
        }}
        />
        
    </Tab.Navigator>
);
export default AppNavigator;