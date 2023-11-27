import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from "../../componentes/Card";
import Sobre from "../../componentes/Sobre";
import Rodape from '../../componentes/Rodapé';


export default function Home() {
  return (
    <View>
      <ScrollView>
        <Sobre/>
        <Rodape/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:"row",
  },
});