import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Perfil({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
      >
        <MaterialCommunityIcons name="account-circle" size={100} color="#333" />
        <Text style={styles.userName}>Nome do Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('Compras')}
      >
        <MaterialCommunityIcons name="credit-card" size={35} color="#333" />
        <View style={styles.info}>
        {/* <TouchableOpacity style={styles.option} onPress={Compras}>

      </TouchableOpacity> */}
        </View>
        <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
      </TouchableOpacity>

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
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  userName: {
    marginTop: 10,
    fontSize: 20,
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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