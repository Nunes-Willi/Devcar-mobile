import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Rodape = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>© 2023 DevCar Joinville</Text>
        <Text style={styles.contatoInfo}>E-mail: DevCarjoinville.com</Text>
        <Text style={styles.contatoInfo}>Telefone: (47) 9696-5789</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#333',
      padding: 10,
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 14,
    },
    contato: {
      color: '#fff',
      fontSize: 12,
      marginTop: 5,
    },
    contatoInfo: {
      color: '#fff',
      fontSize: 12,
      marginTop: 3,
    },
  });
  
  export default Rodape;