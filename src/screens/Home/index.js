import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const RevendedoraPage = () => {
  const revendedora = {
    nome: 'Revendedora DevCar',
    foto: 'https://img.freepik.com/vetores-gratis/logotipo-de-revendedor-de-carros-de-design-plano_23-2149338507.jpg?w=740&t=st=1695824530~exp=1695825130~hmac=1a506ed3e4b2472159bb957ed54127f841054d90c6a889ee199054857859fa3b',
    descricao:
      'Se você está em busca do carro dos seus sonhos em Joinville, não precisa procurar mais. Nossa revendedora de carros é o destino perfeito para encontrar o veículo perfeito para atender às suas necessidades.',
    produtos: [],
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Image source={{ uri: revendedora.foto }} style={styles.foto} />
          <Text style={styles.nome}>{revendedora.nome}</Text>
          <Text style={styles.descricao}>{revendedora.descricao}</Text>

        </View>
      </ScrollView>

      <View style={styles.rodape}>
        <Text style={styles.text}>© 2023 DevCar Joinville</Text>
        <Text style={styles.contatoInfo}>E-mail: DevCarjoinville.com</Text>
        <Text style={styles.contatoInfo}>Telefone: (47) 9696-5789</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 60, 
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: '#000',
    fontSize: 14,
  },
  contatoInfo: {
    color: '#000',
    fontSize: 12,
    marginTop: 3,
  },
  rodape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
});

export default RevendedoraPage;
