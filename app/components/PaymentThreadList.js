import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import PaymentThread from './PaymentThread';

const paymentData=[
    {
        id:1,
        title:'Payment Made',
        subTitle:'Quicksilver Corp.',
        description:'I am a dummy description please do ignore me. I am also a very long text.',
        payment:'1,700',
    },
    {
        id:2,
        title:'Small Payment Made',
        description:'I am a dummy description please do ignore me. I am also a very long text.',
        subTitle:'Neff Headwear',
        payment:'500',
    },
    {
        id:3,
        title:'Large Payment Made',
        description:'I am a dummy description please do ignore me. I am also a very long text.',
        subTitle:'Nike co.',
        payment:'10,250',
    },
    {
        id:4,
        title:'Another Payment Made',
        description:'I am a dummy description please do ignore me. I am also a very long text.',
        subTitle:'Coke co.',
        payment:'4,569',
    },
    {
        id:5,
        title:'Payment Made',
        description:'I am a dummy description please do ignore me. I am also a very long text.',
        subTitle:'Addidas co.',
        payment:'15,435',
    },
]

function PaymentThreadList(props) {
    return (
            <FlatList
            nestedScrollEnabled
            style={styles.list}
            data={paymentData}
            keyExtractor={paymentData=>paymentData.id.toString()}
            renderItem={({item}) => <PaymentThread title={item.title} subTitle={item.subTitle} description={item.description} payment={item.payment} />}
            />
    );
}

const styles = StyleSheet.create({
    list:{
        //height:620,
        //backgroundColor:'pink'
    }
})

export default PaymentThreadList;