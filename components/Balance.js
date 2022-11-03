import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';

const Balance = () => {
  console.log('test');
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceText}>Balance</Text>
      <Text style={styles.balanceAmount}>$80.00</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Icon name={'arrow-top-right'} style={styles.icon} />
          <Text style={styles.button}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Icon name={'arrow-bottom-left'} style={styles.icon} />
          <Text style={styles.button}>Receive</Text>
        </TouchableOpacity>
        {/* <Button style={styles.button} title="Send" />
        <Button style={styles.button} title="Receive" /> */}
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: '#2751EC',
    height: 250,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceText: {
    color: '#fff',
    fontSize: 14,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 46,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    margin: 10,
    backgroundColor: '#2048E5',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 3,
  },
});
