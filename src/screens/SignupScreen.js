import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      Alert.alert('Success', 'Account created successfully');
      navigation.navigate('SignIn');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style = {styles.imagecontainer}>
      <Image source={require('../../assets/gif.gif')} />
      </View>
      <View style={styles.signupcontainer}>
      <Text style={styles.header}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: "#7BD953",
  },
  imagecontainer:{
    marginLeft: 15,
    marginTop: -45,
    width:200,
    height: 200,

  },
  signupcontainer:{
    flex: 1,
    marginTop: 120,
    padding: 20,
    backgroundColor: "#5FA73F",
    borderTopLeftRadius: 100,
  },
  header: {
    fontSize: 35,
    marginBottom: 20,
    marginTop: 0,
    marginLeft: 80,
    color: "#fff",
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  link: {
    color: '#000000',
    marginTop: 10,
    marginBottom: 30,
    fontSize: 17,
  },
  signupButton: {
    backgroundColor: '#000000',
    marginTop: 30,
    marginLeft: 15,
    paddingVertical: 10,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,

  },
});

export default SignupScreen;
