import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import Constants from 'expo-constants';
import * as Progress from 'react-native-progress';

import stripeApi from '../api/stripeApi';

function WebViewScreen(props) {
const [accountLink, setAccountLink] = useState('');
const [progress, setProgress]=useState();

useEffect(()=>{
    getStripeAccountLink();
}, []);

const getStripeAccountLink = async ()=>{
    const result=await stripeApi.getAccountLink();
    if(!result.ok)
        return setAccountLink('');
    
    setAccountLink(result.data);
    console.log(result.data);
};

    return (
        <View style={styles.mainContainer}>    
            <Progress.Bar progress={progress} width={null}
            borderWidth={0}
            borderRadius={0}/>
            <WebView 
            source={{uri:'https://stripe.com/connect'}}
            onLoadProgress={({nativeEvent}) => {setProgress(nativeEvent.progress)}}
            />
        </View>
        
    );
}
const styles = StyleSheet.create({
    mainContainer:{
        paddingTop:Constants.statusBarHeight,
        //flex:1,
        width:'100%',
        height:'100%',
    }
})

export default WebViewScreen;