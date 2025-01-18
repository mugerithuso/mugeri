import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



const Home = () =>{
  return(
    <View style={styles.container}>
      <View style = {styles.hearder}>

      </View>

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
    
});


export default Home;