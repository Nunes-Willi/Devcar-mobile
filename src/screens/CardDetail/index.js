import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardDetail({ route, navigation }) {

  const { CarroId } = route.params;

        


  return (
    <View style={styles.container}>
      <Text>Pagamentos</Text>
      <Text></Text>
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