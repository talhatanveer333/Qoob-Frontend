import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function QoobDetailsItem({service, price, qty, total}) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.boxView}><Text style={styles.text}>{service}</Text></View>
            <View style={styles.boxView}><Text style={styles.text}>${price}</Text></View>
            <View style={styles.boxView}><Text style={styles.text}>{qty}</Text></View>
            <Text style={styles.amount}>${total}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:25,
    },
    boxView:{
        borderWidth:1,
        padding:7,
        backgroundColor:'#E0E0E0',
        borderRadius:7,
    },
    text:{
        fontSize:24,
    },
    amount:{
        fontSize:26,
        fontWeight:'bold',
    },
})
export default QoobDetailsItem;