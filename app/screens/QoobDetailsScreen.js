import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import Constants from 'expo-constants';

import HeadSection from '../components/HeadSection';
import AppButton from '../components/AppButton';
import QoobDetailsItem from '../components/QoobDetailsItem'; 

function qoobDetailsScreen(props) {
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
            <HeadSection />

            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Service</Text>
                <Text style={styles.headingText}>Price</Text>
                <Text style={styles.headingText}>Qty.</Text>
                <Text style={styles.headingText}>Total</Text>
            </View>
            <View style={styles.formContainer}>
                <QoobDetailsItem service='Photography' price='1700.00' qty='2' total='3400.00' />
                <QoobDetailsItem service='Videography' price='2400.00' qty='1' total='2400.00' />
                <QoobDetailsItem service='Social Media' price='1250.00' qty='4' total='5000.00' />
                <QoobDetailsItem service='Photography' price='1700.00' qty='2' total='3400.00' />
                <QoobDetailsItem service='Videography' price='2400.00' qty='1' total='2400.00' />
                <QoobDetailsItem service='Social Media' price='1250.00' qty='4' total='5000.00' />
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title='Add New Item' onPress={()=>console.log('Button clicked')}/>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.textItemContainer}><Text style={styles.detailsHeading}>Subtotal</Text><Text style={styles.detailsAmount}>$10800.00</Text></View>
                <View style={styles.textItemContainer}><Text style={styles.detailsHeading}>Tax</Text><Text style={styles.detailsAmount}>$143.00</Text></View>
                <View style={styles.textItemContainer}><Text style={styles.detailsHeading}>Total</Text><Text style={styles.detailsTotalAmount}>$10843.00</Text></View>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'snow',
        paddingTop: Constants.statusBarHeight,
    },
    headingContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'snow',
        padding:10,
        paddingVertical:20,
        borderBottomWidth:1,
    },
    headingText :{
        fontSize:15,
        fontWeight:'300',
        paddingHorizontal:20,
    },
    formContainer:{
        backgroundColor:'snow',
        paddingHorizontal:20,
        paddingVertical:20,
        borderBottomWidth:1,
    },
    buttonContainer:{
        width:'50%',
        alignSelf:'center',
        backgroundColor:'snow',
        paddingBottom:40,
    },
    lowerSection:{
        backgroundColor:'snow',
    },
    detailsContainer:{
        alignItems:'flex-end',
        paddingRight:20,
        backgroundColor:'snow',
        paddingBottom:70,
    },
    textItemContainer:{
        flexDirection:'row',
    },
    detailsAmount:{
        fontSize:22,
        fontWeight:'bold',
    },
    detailsHeading:{
        fontSize:20,
        position:'absolute',
        right:170,
    },
    detailsTotalAmount:{
        fontSize:22,
        fontWeight:'bold',
        color:'green',
    }
})
export default qoobDetailsScreen;