import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const courses = [
  { id: '3', title: 'First Aid', screen: 'FirstAid', Image: require('../../assets/firstaid.png')  },
  { id: '4', title: 'Sewing',screen: 'Sewing', Image: require('../../assets/sewing.png') },
  { id: '5', title: 'Landscaping', screen: 'Landscaping', Image: require('../../assets/landscaping.png')},
  { id: '6', title: 'Life Skills',  screen: 'LifeSkills', Image: require('../../assets/lifeskills.png') },
];

const SixmonthScreen = ({ navigation }) => {
  const renderCourse = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        // Conditional navigation logic
        if (item.id === '3') {
          // Navigate to the first screen
          navigation.navigate('FirstAid');
        } else if (item.id === '4') {
          // Navigate to the second screen
          navigation.navigate('Sewing');
        } else if (item.id === '5') {
          // Navigate to the second screen
          navigation.navigate('Landscaping');
        } else if (item.id === '6') {
          // Navigate to the second screen
          navigation.navigate('Lifeskills');
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
         <Text style={styles.headerTitle}>Six-month Courses</Text>
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
    margin: 10,
    marginTop: 50,
    marginBottom: 60,
    height: 200,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 160,
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
});


export default SixmonthScreen;