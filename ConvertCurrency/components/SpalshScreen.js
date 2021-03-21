import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 300,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
  },
});

const SplashScreen = () => {
  return (
    <View style={styles.Container}>
      <Image source={require('./assets/32599.jpg')} style={styles.image} />
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
};

export default SplashScreen;
