import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 60,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'flex-end'
  },
  displayValue: {
    fontSize: 60
  }
});

export default props => (
  <View style={styles.display}>
    <Text style={styles.displayValue} numberOfLines={1}>
      {props.value}
    </Text>
  </View>
);
