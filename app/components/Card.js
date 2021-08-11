import React from 'react';
import {Text, View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

function Card({uri, heading, price, title, description, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.mainContainer}>
            

            <View style={styles.upperContainer}>
                <Image style={styles.logo} source={{
                    uri:uri,
                }} />
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
            <View style={styles.lowerContainer}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                <Text numberOfLines={2} style={styles.description}>{description}</Text>
            </View>

        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width:'99%',
        height:210,
        borderWidth:1,
        borderRadius:15,
        overflow:'hidden',
        padding: 20,
        backgroundColor:'snow',
        elevation:5,
        marginTop:20,
        //backgroundColor: 'pink',
    },
    upperContainer:{
        flexDirection:'row',
        alignContent:'center',
        //justifyContent:'center',
        //backgroundColor:'grey',
    },
    logo:{
        marginRight:15,
        borderRadius:4,
        width:33,
        height:30,
    },
    heading:{
        fontSize:18,
        color:'black',
        fontWeight:'100',
    },
    price:{
        fontSize:29,
        fontWeight:'bold',
        color:'black',
        position:'absolute',
        alignSelf:'flex-end',
        right:1,
    },
    title:{
        fontSize:17,
        fontWeight:'bold',
        color:'black',
    },
    description:{
        fontSize:14,
        fontWeight:'300',
        color:'grey',
        marginTop:10,
        lineHeight:25,
    },
    lowerContainer:{
        padding:7,
        marginTop:20,
    },
})

export default Card;