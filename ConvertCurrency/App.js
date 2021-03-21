import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Home from './components/Home';
import SplashScreen from './components/SpalshScreen';

const App = () => {
  const [splashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, []);

  if (splashScreen) {
    return <SplashScreen />;
  } else
    return (
      <>
        <SafeAreaView>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <Home />
        </SafeAreaView>
      </>
    );
};

export default App;
