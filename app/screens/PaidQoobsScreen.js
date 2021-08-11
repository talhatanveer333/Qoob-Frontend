import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import HeadSection from '../components/HeadSection';
import PaymentThreadList from '../components/PaymentThreadList';
import SettingsList from '../components/SettingsOptionsList';
import { ScrollView } from 'react-native-gesture-handler';

function PaidQoobsScreen(props) {
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.ScrollView} >
            
            <HeadSection />
             <View style={styles.lowerContainer}>
            
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Paid Qoobs</Text>
                <View style={styles.notificationContainer}>
                    <Text style={styles.notification}>30</Text>
                </View>
            </View>
            <View style={styles.listContainer}>
                <PaymentThreadList />
            </View>

            </View> 
            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'white',
    },
    lowerContainer:{
        flex:1,
        //backgroundColor:'pink'
    },
    headingContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:25,
        //justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'green',
    },
    heading:{
        fontSize:35,
        color:'black',
        fontWeight:'bold',
        paddingBottom:20,
        paddingRight:40,
        //alignSelf:'center',
    },
    notificationContainer:{
        width:35,
        height:35,
        backgroundColor:'#304FFE',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:13,
    },
    notification:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    },
    listContainer:
    {
        width:'100%',
        //height:'70%',
        //backgroundColor:'yellow',
        //padding:10,
    }
})

export default PaidQoobsScreen;