import React from 'react';
import { FlatList, View, StyleSheet, TouchableWithFeedback } from 'react-native';

import ConversationHead from './ConversationHead';

const options=[
    {
        id:1,
        name:'My Qoobs',
        description:'3 active and 17 archived qoobs',
    },
    {
        id:2,
        name:'Shipping Addresses',
        description:'2 Addresses',
    },
    {
        id:3,
        name:'Payment Methods',
        description:'ACH - Visa **77',
    },
    {
        id:4,
        name:'Friend Codes',
        description:'You don\'t have special promocodes yet',
    },
    {
        id:5,
        name:'Settings',
        description:'Notifications, Passwords',
    },
    {
        id:6,
        name:'Friend Codes',
        description:'You don\'t have special promocodes yet',
    },
    {
        id:7,
        name:'Friends Qoobs',
        description:'You don\'t have special promocodes yet',
    },
    {
        id:8,
        name:'Stripe Account Setup',
        description:'Setup your stripe account.',
    },
]

function SettingsOptionsList({navigation}) {
    return (
            <FlatList
            nestedScrollEnabled
            style={styles.list}
            data={options}
            keyExtractor={options=>options.id.toString()}
            renderItem={({item}) => <ConversationHead name={item.name} description={item.description} 
            onPress={()=>{
                if (item.id===8){
                    navigation.navigate('WebView');
                }
            }}
            />}
            />
    );
}

const styles = StyleSheet.create({
    list:{
        //height:530,
        //backgroundColor:'snow'
    }
})
export default SettingsOptionsList;