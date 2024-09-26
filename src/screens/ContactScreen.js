import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ContactScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const venues = [
    {
      label: 'Braamfontein',
      address: '123 Main St, Braamfontein',
      email: 'braamfontein@example.com',
      phone: '0111234567',
      latitude: -26.1929,
      longitude: 28.0302,
    },
    {
      label: 'Sandton',
      address: '456 Second St, Sandton',
      email: 'sandton@example.com',
      phone: '0112345678',
      latitude: -26.1076,
      longitude: 28.0567,
    },
    {
      label: 'Rosebank',
      address: '789 Third St, Rosebank',
      email: 'rosebank@example.com',
      phone: '0113456789',
      latitude: -26.1454,
      longitude: 28.0412,
    },
  ];

  const validateForm = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }
    if (!phoneRegex.test(phone)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
      return false;
    }
    if (!name.trim()) {
      Alert.alert('Name Required', 'Please enter your name.');
      return false;
    }
    if (!message.trim()) {
      Alert.alert('Message Required', 'Please enter a message.');
      return false;
    }
    return true;
  };

  const handleQuerySubmit = () => {
    if (validateForm()) {
      Alert.alert('Form Submitted', `Your query has been submitted. Name: ${name}`);
      // Clear the form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };

  const openMaps = (latitude, longitude) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBackground}>
              {/* back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButtonText}>back</Text>
        </TouchableOpacity>
          <Text style={styles.headerTitle}>Contact Us</Text>
      </View>

      <View style={styles.bottomBackground}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {venues.map((venue) => (
            <View key={venue.label} style={styles.whitePage}>
              <Text style={styles.venueHeader}>{venue.label}</Text>
              <Text style={styles.venueText}>{venue.address}</Text>
              <Text style={styles.venueText}>{venue.email}</Text>
              <Text style={styles.venueText}>{venue.phone}</Text>

              <TouchableOpacity onPress={() => openMaps(venue.latitude, venue.longitude)}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: venue.latitude,
                    longitude: venue.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: venue.latitude,
                      longitude: venue.longitude,
                    }}
                    title={venue.label}
                  />
                </MapView>
              </TouchableOpacity>
            </View>
          ))}

          <View style={styles.whitePage}>
            <Text style={styles.queryHeader}>Queries</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your message"
              multiline
              numberOfLines={4}
              value={message}
              onChangeText={setMessage}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleQuerySubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBackground: {
    flex: 0.15,
    flexDirection: 'row',
    backgroundColor: '#008000', // Dark green color
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    elevation: 5, // Adds a shadow effect on Android
  },
  bottomBackground: {
    flex: 0.85,
    backgroundColor: '#99cc99', // Lighter green color
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    paddingTop: 20,
  },
  backButton: {
    width: 55,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#cce6cc',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000', // Color of the back button
    marginTop: 40,
  },
  backButtonText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 35,
    marginTop: 40,
    color: '#fff', 
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  whitePage: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  venueHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  venueText: {
    fontSize: 16,
    marginBottom: 5,
  },
  map: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  queryHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#008000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactScreen;
