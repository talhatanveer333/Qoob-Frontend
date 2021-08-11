import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

function PaymentThread({title, subTitle, description, payment}) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.iconContainer}>
                <FontAwesome5 name='credit-card' size={23} color='white' />
            </View>

            <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.subTitle}>{subTitle}</Text>
                <Text numberOfLines={2} style={styles.description}>{description}</Text>
            </View>
            <View style={styles.paymentContainer}>
                <Text style={styles.payment}>${payment}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        padding:17,
        //justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'yellowgreen',
    },
    iconContainer:{
        backgroundColor:'#304FFE',
        borderRadius:50,
        padding:15,
        marginTop:-20,
    },
    titleContainer:{
        paddingLeft:10,
    },
    title:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
        marginBottom:-5,
    },
    subTitle:{
        fontSize:16,
        color:'#424242',
        fontWeight:'600',
        paddingBottom:7,
    },
    description:{
        fontSize:13,
        color:'#9E9E9E',
        fontWeight:'600',
        paddingRight:100,
    },
    paymentContainer:{
        backgroundColor:'#304FFE',
        borderRadius:15,
        paddingLeft:10,
        paddingRight:10,
        position:'absolute',
        right:20,
        top:25,

    },
    payment:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    }
})

export default PaymentThread;