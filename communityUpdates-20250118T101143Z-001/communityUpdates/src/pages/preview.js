import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';






const Preview = ({navigation}) =>{
  return(

    <View style = {styles.container}>

      <View style = {styles.hearder}>
        <Animatable.Image animation= "bounceInRight"duration={4000}
        style = {styles.logo}
        source={require('./logo.png')}/>
      </View>

      <Animatable.View style = {styles.footer}animation = "fadeInUpBig"duration={1500}>
        
        <Text style = {styles.Text}>
          Get connected with your community....
        </Text>
        
        <TouchableOpacity onPress={()=>navigation.navigate("login")}style = {styles.button}>
          <Text style = {styles.buttonText}>get started </Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
    );
  };


const styles = StyleSheet.create({

    container: {
      flex: 1,  
      backgroundColor: '#0d6191',
         
    },

    hearder: {
      flex: 4,
      alignItems: 'center',
      height: 400,
      justifyContent: 'center',
      

    },
    logo: {
      width: '50%',
      height: '50%',
      position: 'absolute',
      top:30,
    },
    footer: {
      backgroundColor: '#fafafa',
      flex: 3,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30, 
      
    },
    Text: {
      top: 30,
      fontSize: 30,
      left: '1%',
      fontWeight: 'bold',
    
    },
    button: {
      backgroundColor: '#0d6191',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: 150,
      height: 50,
      alignSelf: 'flex-end',
      top: '50%',
      right:20,
      borderRadius: 20,
      
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      
    }
    
  });

export default Preview;