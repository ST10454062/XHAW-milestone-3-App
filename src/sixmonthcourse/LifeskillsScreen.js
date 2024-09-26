import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const LifeskillsScreen = ({ navigation }) => {

  const handleAddToCart = () => {
    const item = {
      id: '4',
      name: 'LifeSkills',
      price: 1500,
      description: 'To provide skills to navigate basic life necessities.',
    };
   
    
    
    navigation.navigate('Cart', { item });// Navigate to CartScreen after adding
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
              {/* back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Sixmonth')}>
          <Text style={styles.backButtonText}>back</Text>
        </TouchableOpacity>
         <Text style={styles.headerTitle}>Life Skills</Text>
      </View>


      <View styel={styles.cardContainer}>
      <Image
        source={require('../../assets/lifeskills.png')}
        style={styles.headerImage}
      />
      <Text style={styles.fees}>Fees: R1500</Text>
      <Text style={styles.description}>
        Purpose: To provide skills to navigate basic life necessities.
      </Text>
      <Text style={styles.content}>
        Content:{'\n'}- Opening a bank account  {'\n'}- Basic labour law (know your rights)  {'\n'}- Basic reading and writing literacy {'\n'}
        - Basic numeric literacy 
      </Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addButtonText}>Go to Cart</Text>
      </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Home Button */}
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
          <View style={styles.iconContainer}>
             <Text style={styles.footerText}>Home</Text>
          </View>
        </TouchableOpacity>

        {/* Cart Button */}
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.footerCartText}>CART</Text>
        </TouchableOpacity>

        {/* Contact Button */}
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Contact')}>
          <View style={styles.iconContainer}>
            <Text style={styles.footerText}>Contact Us</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cce6cc",
  },
  cardContainer: {
    justifyContent: 'center',
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
  headerImage: {
    width: '90%',
    height: 330,
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },

  fees: {
    fontSize: 22,
    margin: 10,
  },
  description: {
    fontSize: 20,
    margin: 10,
  },
  content: {
    fontSize: 20,
    margin: 10,
  },
  addButton: {
    backgroundColor: '#008000',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderTopColor: '#ccc',
  },

  iconContainer: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton: {
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  footerCartText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  cartButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#008000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});

export default LifeskillsScreen;
