import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import jwtDecode from 'jwt-decode';

import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import authApi from '../api/authAPI';
import AuthContext from '../auth/context';
import AuthStore from '../auth/authStorage';

const validationSchema=Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(8).label('Password')
})



function LoginScreen({navigation}) {
const [loginFailed, setLoginFailed] = useState(false);
const authContext=useContext(AuthContext);

    const getAuthToken = async ({email, password}) => {
        const result = await authApi.login(email, password);
        if(!result.ok) return setLoginFailed(true);

        setLoginFailed(false);
        AuthStore.storeToken(result.data);
        const user=jwtDecode(result.data);
        authContext.setUser(user);
        console.log(user);
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='hexagon' size={130} color='rgb(8, 29, 38)' style={styles.iconContainer}/>
            <Ionicons name='cube-sharp' size={60} color='snow' style={styles.icon}/>
            <Formik
            initialValues={{email:'', password:''}}
            onSubmit={getAuthToken}
            validationSchema={validationSchema}
            >
            {({handleSubmit, handleChange, errors, setFieldTouched, touched})=>(
            <>
                {loginFailed && <AppText text='Invalid email or password.' color='red' fontSize={18} alignSelf='center'/>}
                <AppTextInput
                icon='email'
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Email'
                keyboardType='email-address'
                textContentType='emailAddress'
                onChangeText={handleChange('email')}
                onBlur={()=> setFieldTouched('email')}/>
                {errors.email && touched.email && <AppText text={errors.email} color='red' fontSize={15} paddingLeft={15}/>}

                <AppTextInput
                icon='lock'
                placeholder='Password'
                keyboardType='default'
                secureTextEntry
                autoCapitalize='none'
                autoCorrect={false}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={()=> setFieldTouched('password')}/>
                {errors.password && touched.password && <AppText text={errors.password} color='red' fontSize={15} paddingLeft={15}/>}

                <AppButton
                title='Submit'
                onPress={handleSubmit}
                backgroundColor='#304FFE'/>
            </>
            )}
            </Formik>


        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        paddingTop: Constants.statusBarHeight,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'snow',
        justifyContent:'center',
        alignItems:'center',
    },
    iconContainer:{
        position:'absolute',
        left:203,
        top:200
    },
    icon:{
        paddingBottom:60,
        position:'absolute',
        left:239,
        top:230,

    }
    
})

export default LoginScreen;