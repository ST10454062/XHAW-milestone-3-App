import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from './src/screens/SplashScreen';
import CartScreen from './src/screens/CartScreen';
import HomeScreen from './src/screens/HomeScreen';
import ContactScreen from './src/screens/ContactScreen';

import SixmonthScreen from './src/sixmonthcourse/SixmonthScreen';
import LandscapingScreen from './src/sixmonthcourse/LandscapingScreen';
import SewingScreen from './src/sixmonthcourse/SewingScreen';
import LifeskillsScreen from './src/sixmonthcourse/LifeskillsScreen';
import FirstAidScreen from './src/sixmonthcourse/FirstAidScreen';


import SixweekScreen from './src/sixweekcourse/SixweekScreen';
import ChildMindingScreen from './src/sixweekcourse/ChildMindingScreen';
import GardenScreen from './src/sixweekcourse/GardenScreen';
import CookingScreen from './src/sixweekcourse/CookingScreen';


const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const navigator = createStackNavigator(
    {
      Splash: (props) => <SplashScreen {...props} items={items}/>,
      Home: (props) => <HomeScreen {...props} items={items}/>,
      Cart: (props) => <CartScreen {...props} items={items}/>,
      Contact: (props) => <ContactScreen {...props} items={items}/>,
      

      Sixmonth: (props) => <SixmonthScreen {...props} items={items}/>,
      Landscaping: (props) => <LandscapingScreen {...props} items={items}/>,
      Sewing: (props) => <SewingScreen {...props} items={items}/>,
      Lifeskills: (props) => <LifeskillsScreen {...props} items={items}/>,
      FirstAid: (props) => <FirstAidScreen {...props} items={items}/>,

      Sixweek: (props) => <SixweekScreen {...props} items={items}/>,
      Child: (props) => <ChildMindingScreen {...props} items={items}/>,
      Garden: (props) => <GardenScreen {...props} items={items}/>,
      Cooking: (props) => <CookingScreen {...props} items={items}/>,

 
    },
    {
      initialRouteName: 'Splash',
      defaultNavigationOptions: {
        headerShown: false, 
      
      },
    }
  );


  const AppContainer = createAppContainer(navigator);
  return <AppContainer />;
};

export default App;
