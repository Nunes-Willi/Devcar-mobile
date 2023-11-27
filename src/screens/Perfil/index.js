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
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.navigationTitle}>Perfil</Text>
        <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
          <MaterialCommunityIcons name={darkTheme ? 'weather-sunny' : 'weather-night'} size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.scrollContent}>
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
      </View>
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
  darkTheme: {
    backgroundColor: '#333',
    color: '#fff',
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navigationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContent: {
    flex: 1,
    paddingTop: 10,
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
    padding: 10,
  },
});
