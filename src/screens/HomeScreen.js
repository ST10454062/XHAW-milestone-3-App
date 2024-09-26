import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons


// Sample data for the course cards
const courses = [
  { id: '1', title: 'Six-week courses', Image: require('../../assets/cooking.png') },
  { id: '2', title: 'Six-month courses', Image: require('../../assets/sewing.png') },
];

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(-screenWidth * 0.75))[0]; // For sliding the menu in/out
  const menuButtonAnim = useState(new Animated.Value(20))[0]; // For moving the menu button

  const toggleMenu = () => {
    const toValue = isMenuOpen ? -screenWidth * 0.75 : 0;
    const buttonToValue = isMenuOpen ? 20 : screenWidth * 0.75;

    // Animate the sliding menu
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Animate the menu button movement
    Animated.timing(menuButtonAnim, {
      toValue: buttonToValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsMenuOpen(!isMenuOpen);
  };

  // Render each course card
  const renderCourseCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        if (item.id === '1') {
          navigation.navigate('Sixweek');
        } else if (item.id === '2') {
          navigation.navigate('Sixmonth');
        }
      }}
    >
      <Image source={item.Image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
         <Text style={styles.headerTitle}>Empowering the Nation</Text>
      </View>


      {/* Header Image */}
      <Image source={require('../../assets/women_empowered.jpg')} style={styles.headerImage} />

      {/* Menu Button */}
      <Animated.View style={[styles.menuButton, { transform: [{ translateX: menuButtonAnim }] }]}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Discounts Section */}
      <View style={styles.discountsContainer}>
        <Text style={styles.discountsTitle}>Discounts!</Text>
        <Text style={styles.discountsText}>
          2 courses = 5%{'\n'}3 courses = 10%{'\n'}4+ courses = 15%
        </Text>
      </View>

      {/* Courses Section */}
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardContainer}
        numColumns={2}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerCartText}>            </Text>

        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.footerCartText}>CART</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.footerText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      {/* Slide-Out Menu */}
      <Animated.View style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
        <Text style={styles.menuTitle}>Content:</Text>
        <Text style={styles.infoText}>
          “Empowering the Nation” is a training school initiative started by Precious Radebe that provides skills training for domestic workers and gardeners. Established in 2018, the program offers six-month and short six-week courses designed to upskill individuals, enabling them to improve their employability or even start their own small businesses.
        </Text>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.menuItemText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Sixweek')}>
          <Text style={styles.menuItemText}>Six-Week Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Sixmonth')}>
          <Text style={styles.menuItemText}>Six-Month Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.menuItemText}>Cart</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cce6cc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#ffffff', // White background for the header
    elevation: 5, // Adds a shadow effect on Android
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 35,
    marginTop: 40,
    color: '#000', // Color of the title
  },
  infoText:{
    fontSize: 20,
    marginBottom: 30,
  },

  headerImage: {
    width: 335,
    height: 200,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 10,
  },
  cardContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  card: {
    width: '45%',
    height: 170,
    backgroundColor: '#f9f9f9',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  discountsContainer: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 40,
    padding: 15,
    backgroundColor: '#008000',
    borderRadius: 10,
    alignItems: 'center',
  },
  discountsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  discountsText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
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

export default HomeScreen;
