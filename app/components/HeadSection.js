import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {MaterialCommunityIcons, Ionicons, Entypo} from '@expo/vector-icons';

function HeadSection(props) {
    return (
        <View style={styles.upperContainer}>
                <Image resizeMode={'stretch'} source={{
                    uri:'https://picsum.photos/id/249/200/300',
                    width:'100%',
                    height:'100%',
                }}/>
                <Entypo name='cross' size={35} color='snow' style={styles.cross}/>
                <MaterialCommunityIcons name='hexagon' size={80} color='snow' style={styles.mainIcon} />
                <Ionicons name='md-cube' size={40} color='#E91E63' style={styles.subIcon} />
                <Text style={styles.headingTitle}>qoob.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    upperContainer:{
        width:'100%',
        height:240,
        backgroundColor:'red',
    },
    cross:{
        position:'absolute',
        left:10,
        top:20,
    },
    mainIcon:{
        position:'absolute',
        left:130,
        top:70,
    },
    subIcon:{
        position:'absolute',
        left:151,
        top:90,
    },
    headingTitle:{
        position:'absolute',
        fontSize:50,
        color:'snow',
        left:210,
        top:70,
    },
})

export default HeadSection;