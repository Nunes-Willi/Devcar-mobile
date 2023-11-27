import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{car.name}</Text>
        <Text style={styles.description}>{car.description}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Ano:</Text>
            <Text style={styles.detailValue}>{car.ano}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Preço:</Text>
            <Text style={styles.detailValue}>${car.preco}</Text>
          </View>
          {/* Adicione mais detalhes aqui, se necessário */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  loadingContainer: {
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
    textShadowColor: '#ccc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 20,
  },
  detailItem: {
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  detailValue: {
    fontSize: 18,
    color: '#666',
  },
});
