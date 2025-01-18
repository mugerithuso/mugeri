import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, TouchableOpacity, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';



const Login = ({navigation}) =>{
  return (

    <View style={styles.container}>

      <View style={styles.hearder}>
        <Animatable.Text style={styles.text} animation="bounceInRight" duration={3000}>
          Login
        </Animatable.Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig" duration={1500}>
        <Text>Email</Text>
        <TextInput
          placeholder='Enter Email'
          style={styles.textInput} />
        <Text>password</Text>

        <TextInput
          placeholder='Enter password'
          style={styles.textInput} />
        <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.button}>
          <Text style={styles.buttonText}>login </Text>
        </TouchableOpacity>
        
        <Text>
          you don't have account?? 
          <TouchableOpacity onPress={() => navigation.navigate('signUP')}>
            <Text style={styles.signupButton}> SignUP</Text>
          </TouchableOpacity>
        </Text>

      </Animatable.View>



    </View>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#0d6191',
      
    },
    hearder:{
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',

    },
    text:{
      color: '#fff',
      fontSize: 35,
      fontWeight: 'bold',
      margin: '2%'
    },
    footer: {
      backgroundColor: '#fafafa',
      flex: 3,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',

    },
    textInput: {
      width: '75%',
      height: 50,
      backgroundColor: '#f5bb0f',
      marginBottom: '2%',
      borderRadius: 30,
      textAlign: 'center',
      borderBottomColor: 'black',
      borderBottomWidth:2
    },
    button: {
      backgroundColor: '#0d6191',
      alignItems: 'center',
      justifyContent: 'center',
      width: '75%',
      height: 45,
      borderRadius: 20,
      marginTop: '6%',
      marginBottom: '1%',
    },
    buttonText:{
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
    },
    signupButton: {
      color: '#0f7ef5',
      marginTop: 3,
    }
    
});


export default Login;