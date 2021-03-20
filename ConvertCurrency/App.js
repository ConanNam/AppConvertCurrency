import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Home from './components/Home';

const App = () => {
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
