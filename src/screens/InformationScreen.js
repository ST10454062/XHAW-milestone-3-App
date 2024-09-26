import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const InformationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        “Empowering the Nation” is a training school initiative started by Precious Radebe that provides skills training for domestic workers and gardeners. Established in 2018, the program offers six-month and short six-week courses designed to upskill individuals, enabling them to improve their employability or even start their own small businesses. 
      </Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#72bf44',
  },
  infoText: {
    fontSize: 27,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default InformationScreen;
