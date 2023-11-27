import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Perfil({ navigation }) {
  const [darkTheme, setDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ScrollView contentContainerStyle={darkTheme ? [styles.container, styles.darkTheme] : styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.header}>
          <MaterialCommunityIcons name="account-circle" size={120} color="#333" />
          <Text style={styles.userName}>Usuário</Text>
        </TouchableOpacity>

        <View style={styles.profileInfo}>
          <View style={styles.infoSection}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.info}>Phelipi Moser</Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.label}>E-mail:</Text>
            <Text style={styles.info}>Phelipi@gmail.com</Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.info}>47 9876-2654</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
        <MaterialCommunityIcons name={darkTheme ? 'weather-sunny' : 'weather-night'} size={24} color="#333" />
        <Text style={styles.themeButtonText}>{darkTheme ? 'Modo Claro' : 'Modo Escuro'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 30,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userName: {
    marginTop: 15,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  profileInfo: {},
  infoSection: {
    marginBottom: 25,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 8,
  },
  info: {
    fontSize: 18,
    color: '#333',
  },
  themeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
  },
  themeButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  // Estilos para o tema escuro
  darkTheme: {
    backgroundColor: '#333',
    color: '#fff',
  },
});
