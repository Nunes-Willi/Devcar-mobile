import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet,TextInput, Button, FlatList, Image, ScrollView } from 'react-native';

import api from '../../plugins/api';

export default function Home() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  const [cars, setCars] = useState([])

  const getVeiculos = async () => {
    const {data} = await api.get('garagem/veiculos/')
    setCars(data)
    setResults(data)
  }


  useEffect(() => {
    getVeiculos()
  }, [])


  return (
    
    <View >
      <FlatList  
        data={results}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>

            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 220,
    backgroundColor: 'white',
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,

  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});