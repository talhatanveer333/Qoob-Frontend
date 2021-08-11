import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.textContainer}>
                <MaterialCommunityIcons name={icon} size={20} color='#616161' />
                <TextInput
                style={styles.text}
                {...otherProps} />
            </View>
    );
}

const styles = StyleSheet.create({
    textContainer:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#E0E0E0',
        padding:8,
        borderRadius:20,
        alignItems:'center',
        marginTop:10,
        overflow:'hidden',
    },
    text:{
        width:'100%',
        paddingLeft:5,
        color:'#212121',
        fontSize:17,
        fontWeight:'100',
        fontFamily:'Roboto',
    },
})

export default AppTextInput;