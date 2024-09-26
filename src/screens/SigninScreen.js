import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');
      
      if (email === storedEmail && password === storedPassword) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style = {styles.imagecontainer}>
      <Image source={require('../../assets/gif.gif')} />
      </View>
      <View style={styles.logincontainer}>
      <Text style={styles.header}>Welcome Back!</Text>
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
      <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text> 
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Create An Account</Text>
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
  logincontainer:{
    flex: 1,
    marginTop: 120,
    padding: 20,
    backgroundColor: "#008000",
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
    color: 'blue',
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 10,
    fontSize: 17,
  },
  loginButton: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 20,
    width: 300,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,

  },
});

export default SigninScreen;
