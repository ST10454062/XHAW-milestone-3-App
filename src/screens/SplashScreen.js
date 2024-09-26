import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/gif.gif')} />
      <TouchableOpacity style={styles.welcomeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.welcomeButtonText}>Welcome</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#7BD953',
    },
    image: { 
      width: 500, height: 300,
    },

    welcomeButton: {
      backgroundColor: '#008000',
      paddingVertical: 12,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    },
    welcomeButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,

    },
});

export default SplashScreen;
