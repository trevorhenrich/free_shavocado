import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tweets from './Components/Tweets.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <Tweets/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
