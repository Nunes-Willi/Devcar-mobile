import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './screens/Home';
import Busca from './screens/Busca';
import Perfil from './screens/Perfil';
import CardDetail from './screens/CardDetail';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Página Inicial",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="CardDetail"
        component={CardDetail}
        options={{
          title: "Detalhes do Produto",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}


export default function Routes() {
  return (
    <NavigationContainer style={styles.Navigator}>
      <BottomTab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
          
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeRoutes}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Busca"
          component={Busca}
          options={{
            tabBarLabel: 'Busca',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" color={color} size={26} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  Navigator: {
    Color: '#6A5ACD',
  },
});

