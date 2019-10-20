import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TODOS} from '../utils/data'

export default function AllScreen() {
  return (
    <View style={styles.container}>
      <Text>All Screen</Text>
    </View>
  );
}

AllScreen.navigationOptions = {
  title: 'All Todos'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});