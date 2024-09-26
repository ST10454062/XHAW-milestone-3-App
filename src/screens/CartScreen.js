import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Checklist data
const checklistData = [
  { id: 1, label: 'First Aid', fee: 1500 },
  { id: 2, label: 'Sewing', fee: 1500 },
  { id: 3, label: 'Landscaping', fee: 1500 },
  { id: 4, label: 'Life Skills', fee: 1500 },
  { id: 5, label: 'Child Minding', fee: 750 },
  { id: 6, label: 'Cooking', fee: 750 },
  { id: 7, label: 'Garden Maintenance', fee: 750 },
];

const CartScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalFee, setTotalFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vatAmount, setVatAmount] = useState(0);

  // AsyncStorage keys
  const COURSE_KEY = 'selectedCourses';
  const CONTACT_KEY = 'contactDetails';

  // Load saved data from AsyncStorage on component mount
  useEffect(() => {
    loadFormData();
  }, []);

  // Load saved course selection and contact details
  const loadFormData = async () => {
    try {
      const savedCourses = await AsyncStorage.getItem(COURSE_KEY);
      const savedContactDetails = await AsyncStorage.getItem(CONTACT_KEY);

      if (savedCourses) {
        setSelectedCourses(JSON.parse(savedCourses));
      }

      if (savedContactDetails) {
        const { name, phoneNumber, email } = JSON.parse(savedContactDetails);
        setName(name || '');
        setPhoneNumber(phoneNumber || '');
        setEmail(email || '');
      }
    } catch (error) {
      console.error('Failed to load form data', error);
    }
  };

  // Save course selection and contact details to AsyncStorage
  const saveFormData = async () => {
    try {
      await AsyncStorage.setItem(COURSE_KEY, JSON.stringify(selectedCourses));
      await AsyncStorage.setItem(
        CONTACT_KEY,
        JSON.stringify({ name, phoneNumber, email })
      );
    } catch (error) {
      console.error('Failed to save form data', error);
    }
  };

  // Toggle checkbox for course selection
  const toggleCourseSelection = (courseId) => {
    setSelectedCourses((prevSelected) => {
      const updatedSelected = prevSelected.includes(courseId)
        ? prevSelected.filter((id) => id !== courseId)
        : [...prevSelected, courseId];

      // Save the updated selection to AsyncStorage
      AsyncStorage.setItem(COURSE_KEY, JSON.stringify(updatedSelected));

      return updatedSelected;
    });
  };

  // Calculate total fees based on selected courses
  const calculateTotalFee = () => {
    let total = 0;

    selectedCourses.forEach((courseId) => {
      const course = checklistData.find((item) => item.id === courseId);
      if (course) {
        total += course.fee;
      }
    });

    // Apply discount based on number of courses selected
    const discountRate = calculateDiscount(selectedCourses.length);
    const totalAfterDiscount = total - total * discountRate;

    // Add VAT (15%)
    const vat = totalAfterDiscount * 0.15;
    const totalWithVAT = totalAfterDiscount + vat;

    // Update the state
    setDiscount(discountRate * 100); // Display discount as a percentage
    setVatAmount(vat.toFixed(2));
    setTotalFee(totalWithVAT.toFixed(2));
  };

  // Calculate discount based on number of selected courses
  const calculateDiscount = (numCourses) => {
    if (numCourses === 2) {
      return 0.05; // 5% discount for two courses
    } else if (numCourses === 3) {
      return 0.1; // 10% discount for three courses
    } else if (numCourses > 3) {
      return 0.15; // 15% discount for more than three courses
    } else {
      return 0; // No discount for one or zero courses
    }
  };

  // Reset the form and AsyncStorage
  const resetForm = async () => {
    // Clear the state values
    setName('');
    setPhoneNumber('');
    setEmail('');
    setSelectedCourses([]);
    setTotalFee(0);
    setDiscount(0);
    setVatAmount(0);

    // Clear AsyncStorage data
    try {
      await AsyncStorage.removeItem(COURSE_KEY);
      await AsyncStorage.removeItem(CONTACT_KEY);
    } catch (error) {
      console.error('Failed to reset form data', error);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!name || !phoneNumber || !email || selectedCourses.length === 0) {
      Alert.alert('Error', 'Please complete all fields and select at least one course.');
    } else {
      Alert.alert('Success', `Request Submitted! A consultant will contact you soon.`);
      // Save the form data before resetting (if needed)
      await saveFormData();
      // Clear the form and AsyncStorage after submission
      resetForm();
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
              {/* back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButtonText}>back</Text>
        </TouchableOpacity>
         <Text style={styles.headerTitle}>Course Registration</Text>
      </View>

      {/* Contact Information */}
      <View style={styles.contactInfo}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => {
          setName(text);
          saveFormData();
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => {
          setPhoneNumber(text);
          saveFormData();
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          saveFormData();
        }}
      />
      </View>

      {/* Course Selection */}
      <FlatList
        data={checklistData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <CheckBox
              title={`${item.label} - R${item.fee}`}
              checked={selectedCourses.includes(item.id)}
              onPress={() => toggleCourseSelection(item.id)}
            />
          </View>
        )}
      />

      {/* Calculate Total Fees */}
      <TouchableOpacity style={styles.calculateButton} onPress={calculateTotalFee}>
        <Text style={styles.calculateButtonText}>Calculate Total</Text>
      </TouchableOpacity>
      {totalFee > 0 && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Discount Applied: {discount}%</Text>
          <Text style={styles.result}>Total Fee (incl. VAT): R{totalFee}</Text>
        </View>
      )}

      {/* Submit Form */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: "#cce6cc",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff', // White background for the header
    elevation: 5, // Adds a shadow effect on Android
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
    color: '#000', // Color of the title
  },

  contactInfo: {
    backgroundColor: '#99cc99', // Dark green color
  },
  bottomBackground: {
    flex: 0.85,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    paddingTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#008000",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  itemContainer: {
    marginBottom: 10,
    padding: 5,
  },
  resultContainer: {
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  calculateButton: {
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 5,
    width: 300,
    alignItems: 'center',
    backgroundColor: "#008000",
  },
  calculateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,

  },
  submitButton: {
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 20,
    width: 300,
    alignItems: 'center',
    backgroundColor: "#008000",
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,

  },
});

export default CartScreen;
