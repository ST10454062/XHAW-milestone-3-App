import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordReset = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');

      if (email === storedEmail) {
        await AsyncStorage.setItem('userPassword', newPassword); // Update the password in storage
        Alert.alert('Success', 'Your password has been reset.');
        navigation.navigate('SignIn');
      } else {
        Alert.alert('Error', 'Email not found');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TouchableOpacity style={styles.resetButton} onPress={handlePasswordReset}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>Back to Sign In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#5FA73F",
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
  resetButton: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 20,
    width: 300,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,

  },
});

export default ForgotPasswordScreen;
