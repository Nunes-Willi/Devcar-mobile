import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Perfil({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Compras')}
        >
          <MaterialCommunityIcons name="credit-card" size={35} color="#333" />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Compras</Text>
            <Text style={styles.description}>Ver minhas compras</Text>
          </ScrollView>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.menuAdicional}>
        <TouchableOpacity style={styles.opcoesAdicionais}>
          <View style={styles.wrapper}>
            <MaterialCommunityIcons name="lifebuoy" size={25} color="#CDC" />
            <Text style={styles.optionName}>Ajuda</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoesAdicionais}>
          <View style={styles.wrapper}>
            <MaterialIcons name="settings" size={25} color="#CDC" />
            <Text style={styles.optionName}>Configurações</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, 
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 1,
  },
  info: {
    marginLeft: 20,
  },
  title: {
    color: '#333',
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    color: '#999',
  },
  menuAdicional: {
    marginTop: 30,
  },

  opcoesAdicionais: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionName: {
    marginLeft: 25,
    color: '#ccc',
    fontSize: 15,
  },
});