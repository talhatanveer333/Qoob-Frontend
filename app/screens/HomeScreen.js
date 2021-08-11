import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import CardList from '../components/CardList';
import Header from '../components/HeadSection';

function HomeScreen({title, subtitle, navigation}) {
    return (
            <View style={styles.mainContainer}>
                <ScrollView>
                <Header />
                {/* <View style={styles.upperContainer}>
                    <Image resizeMode='stretch' source={{
                        uri:"https://picsum.photos/id/401/200/300",
                        width:'100%',
                        height:300,
                    }}/>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View> */}
                <View style={styles.lowerContainer}>
                    <CardList onPress={() => navigation.navigate('Details')} />
                </View>
                </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        //alignItems:'center',
        backgroundColor:'snow',
        paddingTop: Constants.statusBarHeight,
        //height:700
    },
    lowerContainer:{
        // width:'100%',
        // height:'75%',
        //flex:1,
        //height:"75%",
        //justifyContent:'center',
        //alignItems:'center',
        backgroundColor:'snow',
        paddingLeft:20,
        paddingRight:20,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
    },
})
export default HomeScreen;