import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View,TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';




const SignUP = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <View style = {styles.hearder}>
        <Text style = {styles.text} >
          Fill in to create account
        </Text>

      </View>
      <Animatable.View style = {styles.footer} animation = "fadeInUpBig"duration={1000}>

        <Animatable.View style = {styles.inputContainer} animation = "bounceIn"duration={1000}>
        <TextInput
           style = {styles.textInput}
          placeholder='Enter Email'/>
        </Animatable.View>

        <Animatable.View style = {styles.inputContainer} animation = "bounceIn"duration={2000}>
        <TextInput
           style = {styles.textInput}
          placeholder='Enter first name'/>
        </Animatable.View>

        <Animatable.View style = {styles.inputContainer} animation = "bounceIn"duration={3000}>
        <TextInput
           style = {styles.textInput}
          placeholder=' Cell phone number'/>
        </Animatable.View>

        <Animatable.View style = {styles.inputContainer} animation = "bounceIn"duration={4000}>
        <TextInput
           style = {styles.textInput}
          placeholder='Enter password'/>
        </Animatable.View>

        <Animatable.View style = {styles.inputContainer} animation = "bounceIn"duration={5000}>
        <TextInput
           style = {styles.textInput}
          placeholder='Conferm password'/>
        </Animatable.View>

        <TouchableOpacity onPress={()=>navigation.navigate("login")}style = {styles.button}>
          <Text style = {styles.buttonText}>submit </Text>
        </TouchableOpacity>
    

        

      </Animatable.View>


    </View>
    );
  };

  const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor: '#0d6191'
    },
    hearder: {
      flex:1,
      justifyContent: 'flex-end',

    },
    text: {
      color: '#fafafa',
      fontSize: 30,
      fontWeight: 'bold',
      position: 'absolute',
      alignSelf: 'flex-start',
    

    },
    footer:{
      flex:9,
      backgroundColor: '#fafafa',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    textInput:{
      width: '100%',
      height: '100%',
      backgroundColor: '#f5bb0f',
      borderRadius: 30,
      textAlign: 'center',
      borderBottomColor: 'black',
      borderBottomWidth:2
    },
    inputContainer:{
      width: '80%',
      height: 40,
      marginBottom: '3%',
      bottom: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#0d6191',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      width: 150,
      height: 50,  
      right:20,
      borderRadius: 20,
      
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      
    },
    

    
});


export default SignUP;