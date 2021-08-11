import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

function AppButton({title, onPress, ...otherProps}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, {...otherProps}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'rgb(96, 39, 99)',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:25,
        padding:10,
        marginTop:30,
    },
    title:{
        color:'white',
        fontSize:20,
        fontWeight: 'bold',

    }
})
export default AppButton;