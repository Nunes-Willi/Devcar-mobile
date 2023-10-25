import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import api from '../../plugins/api';

export default function CardDetail({ route, navigation }) {
  const [car, setCar] = useState(null);
  const id = route.params.CarroId;

  const getVeiculoById = async () => {
    try {
      const { data } = await api.get(`garagem/veiculos/${id}`);
      setCar(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVeiculoById();
  }, []);

  if (!car) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{car.name} - {id}</Text>
        <Text>{car.description}</Text>
      </View>
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
  image: {
    width: 350,
    height: 350,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});