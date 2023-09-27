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
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: revendedora.foto }} style={styles.foto} />
      <Text style={styles.nome}>{revendedora.nome}</Text>
      <Text style={styles.descricao}>{revendedora.descricao}</Text>
      <Text style={styles.tituloProdutos}>Carros mais endidos:</Text>
      {revendedora.produtos.map((produto, index) => (
        <View key={index} style={styles.produto}>
          <Text style={styles.nomeProduto}>{produto.nome}</Text>
          <Text style={styles.precoProduto}>{produto.preco}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor:'white',
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
  },
  descricao: {
    fontSize: 16,
    marginBottom: 20,
  },
  tituloProdutos: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  produto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nomeProduto: {
    fontSize: 16,
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RevendedoraPage;