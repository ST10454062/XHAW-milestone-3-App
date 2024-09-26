import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const courses = [
  { id: '7', title: 'Cooking', screen: 'Cooking', Image: require('../../assets/cooking.png')  },
  { id: '8', title: 'ChildMinding',screen: 'Child', Image: require('../../assets/childminding.png') },
  { id: '9', title: 'Gardening', screen: 'Garden', Image: require('../../assets/gardening.png')},

];

const SixweekScreen = ({ navigation }) => {
  const renderCourse = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        // Conditional navigation logic
        if (item.id === '7') {
          // Navigate to the first screen
          navigation.navigate('Cooking');
        } else if (item.id === '8') {
          // Navigate to the second screen
          navigation.navigate('Child');
        } else if (item.id === '9') {
          // Navigate to the second screen
          navigation.navigate('Garden');
        } 
      }}>
      <Image source={item.Image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
              {/* back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButtonText}>back</Text>
        </TouchableOpacity>
         <Text style={styles.headerTitle}>Six-week Courses</Text>
      </View>


      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.cardContainer}
      />
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
    backgroundColor: '#fff',
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
  cardContainer: {
    paddingHorizontal: 5,
    paddingVertical: 35,
    justifyContent: 'center',
    backgroundColor: "#cce6cc",
  },
  card: {
    flex: 1,
    margin: 15,
    marginTop: 40,
    marginBottom: 40,
    height: 240,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginLeft: 0,
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
  menuButton: {
    position: 'absolute',
    top: 70,
    backgroundColor: '#cce6cc',
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
    zIndex: 10,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sideMenu: {
    position: 'absolute',
    left: 0,
    top: 80,
    width: '75%',
    height: 'auto',
    backgroundColor: '#fff',
    zIndex: 5,
    padding: 30,
    elevation: 50,
  },
  menuTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 20,
    color: '#333',
  },
});


export default SixweekScreen;