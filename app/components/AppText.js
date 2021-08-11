import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function AppText({text, ...otherProps}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, {...otherProps}]}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
    },
    text:{
        color:'black',
        fontSize:15,
    }
})
export default AppText;