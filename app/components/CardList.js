import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

import Card from './Card';
import QoobApi from '../api/qoobListingsAPi';

var cardData=[
    {
        id:1,
        uri:"https://picsum.photos/205",
        heading:"Billabong",
        price:"1,250",
        title:"Logo Designs, 3 Concepts, 3 Revisions, 3 Applications",
        description:"I am the dummy description. I am the dummy description.",
    },
    {
        id:2,
        uri:"https://picsum.photos/206",
        heading:"Figma",
        price:"1,500",
        title:"Logo Designs, 3 Concepts, 3 Revisions, 3 Applications",
        description:"I am the dummy description. I am the dummy description.",
    },
    {
        id:3,
        uri:"https://picsum.photos/208",
        heading:"Billabong Pro Max",
        price:"1,800",
        title:"Logo Designs, 3 Concepts, 3 Revisions, 3 Applications",
        description:"I am the dummy description. I am the dummy description.",
    },
    {
        id:4,
        uri:"https://picsum.photos/205",
        heading:"Billabong",
        price:"1,250",
        title:"Logo Designs, 3 Concepts, 3 Revisions, 3 Applications",
        description:"I am the dummy description. I am the dummy description.",
    },
    {
        id:5,
        uri:"https://picsum.photos/206",
        heading:"Figma",
        price:"1,500",
        title:"Logo Designs, 3 Concepts, 3 Revisions, 3 Applications",
        description:"I am the dummy description. I am the dummy description.",
    },
    {
        id:6,
        uri:"https://picsum.photos/208",
        heading:"Billabong Pro Max",
        price:"1,800",
        title:"Logo Designs, 3 Concepts, 3 Revisions, 3 Applications",
        description:"I am the dummy description. I am the dummy description.",
    },
]

function CardList({onPress}) {
    const [qoobs, setQoobs]=useState([]);
    useEffect(() => {
        getQoobs();
    }, []);

    const getQoobs = async () =>{
        const result = await QoobApi.getQoobs();
        if(!result.ok) return setQoobs(null);

        // else got the qoob listings
        setQoobs(result.data);
    }
    return (
        <>
            <FlatList
            nestedScrollEnabled
            style={styles.list}
            numColumns={1}
            data={qoobs}
            keyExtractor={qoobs=> qoobs._id.toString()}
            renderItem={({item}) => <Card onPress={onPress} uri={'https://picsum.photos/206'} heading={item.title} price={item.amount} title={item.subTitle} description={item.description}/>}/>

            {!qoobs && <Text style={styles.errorText}>No Qoobs Found.</Text>}
        </>
    );
}

const styles = StyleSheet.create({
    list:{
        //height:800,
        paddingBottom:20,
    },
  errorText:{
      alignSelf: 'center',
      color:'grey',
      fontSize:18,
      fontWeight:'bold',
      paddingTop:200,
  }  
});
export default CardList;