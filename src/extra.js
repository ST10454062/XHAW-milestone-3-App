import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import InformationScreen from './src/screens/InformationScreen';
import HomeScreen from './src/screens/HomeScreen';
import SixmonthScreen from './src/sixmonthcourse/SixmonthScreen';
import LandscapingScreen from './src/sixmonthcourse/LandscapingScreen';
import SewingScreen from './src/sixmonthcourse/SewingScreen';
import LifeskillsScreen from './src/sixmonthcourse/LifeskillsScreen';
import FirstAidScreen from './src/sixmonthcourse/FirstAidScreen';
import CartScreen from './src/screens/CartScreen';



const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const navigator = createStackNavigator(
    {
      Splash: (props) => <SplashScreen {...props} items={items}/>,
      Information: (props) => <InformationScreen {...props} items={items}/>,
      SignIn: (props) => <SignInScreen {...props} items={items}/>,
      Home: (props) => <HomeScreen {...props} items={items}/>,
      Cart: (props) => <CartScreen {...props} items={items}/>,
      Sixmonth: (props) => <SixmonthScreen {...props} items={items}/>,
      Landscaping: (props) => <LandscapingScreen {...props} items={items}/>,
      Sewing: (props) => <SewingScreen {...props} items={items}/>,
      Lifeskills: (props) => <LifeskillsScreen {...props} items={items}/>,
      FirstAid: (props) => <FirstAidScreen {...props} items={items}/>,

 
    },
    {
      initialRouteName: 'Splash',
      defaultNavigationOptions: {
        title: 'Empowering the Nation',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff', 
        },
        headerTintColor: '#000000', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      },
    }
  );
  const AppContainer = createAppContainer(navigator);
  return <AppContainer />;
};

export default App;




















import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back!</Text>
      <TextInput style={styles.input} placeholder="Username or Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        {/* Login button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
      <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Create An Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  link: {
    color: '#72bf44',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#5FA73F',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignupScreen;



topBackground: {
  flex: 0.15,
  backgroundColor: '#004d00', // Dark green color
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomLeftRadius: 100,
  borderBottomRightRadius: 100,
},
bottomBackground: {
  flex: 0.85,
  backgroundColor: '#99cc99', // Lighter green color
  borderTopLeftRadius: 100,
  borderTopRightRadius: 100,
  paddingTop: 20,
},
header: {
  fontSize: 30,
  color: '#fff',
  fontWeight: 'bold',
},










import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


const CartScreen = ({ cartItems, removeItem, navigation }) => {

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.cartDetails}>
        <Text style={styles.cartTitle}>{item.name}</Text>
        <Text>R{item.price}</Text>
        <Text>Quantity: {item.quantity}</Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeItem(item.id)}
      >
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.totalContainer}>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  cartItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  cartImage: { width: 80, height: 80, borderRadius: 10 },
  cartDetails: { flex: 1, justifyContent: 'center', marginLeft: 10 },
  cartTitle: { fontSize: 16, fontWeight: 'bold' },
  removeButton: { backgroundColor: 'red', padding: 10, borderRadius: 5 },
  removeButtonText: { color: 'white', fontWeight: 'bold' },
  totalContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  totalText: { fontSize: 18, fontWeight: 'bold' },
  paymentButton: { backgroundColor: '#72bf44', padding: 10, borderRadius: 5 },
  paymentButtonText: { color: 'white', fontWeight: 'bold' },
});

export default CartScreen;
