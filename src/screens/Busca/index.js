import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import api from '../../plugins/api';

export default function Busca({ navigation }) {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [cars, setCars] = useState([]);

  const MAX_DESCRIPTION_LENGTH = 100; // Defina o número máximo de caracteres para exibir na descrição

  const getVeiculos = async () => {
    try {
      const { data } = await api.get('/veiculos/');
      setCars(data);
      setResults(data);
    } catch (error) {
      console.error('Erro ao obter veículos:', error);
    }
  };

  useEffect(() => {
    getVeiculos();
  }, []);

  const handleSearch = async (text) => {
    setQuery(text);
    const filteredResults = cars.filter((car) =>
      car.name.toLowerCase().includes(text.toLowerCase())
    );

    // Atualize a descrição para exibir apenas uma parte dela
    const resultsWithShortenedDescription = filteredResults.map((car) => ({
      ...car,
      // Limitar a descrição ao número máximo de caracteres definido
      description:
        car.description.slice(0, MAX_DESCRIPTION_LENGTH) +
        (car.description.length > MAX_DESCRIPTION_LENGTH ? '...' : ''),
    }));

    setResults(resultsWithShortenedDescription);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Procurar um carro"
        value={query}
        onChangeText={handleSearch}
        onSubmitEditing={() => handleSearch(query)}
      />
      <FlatList
        data={results}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CardDetail', { CarroId: item.id })}>
            <View style={styles.result}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.preco}>{item.preco}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  preco:{
    color:"green",
    fontSize: 10,
  },
});
