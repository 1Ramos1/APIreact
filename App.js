import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, text, view } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import aleatorios from './src/componentes/aleatorios';
import capturados from './src/componentes/capturados';
import favoritos from './src/componentes/favoritos';
import lista from './src/componentes/lista';
import usuario from './src/componentes/usuario';
import Pokemon from './src/componentes/pokemon';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="lista" component={lista} />
      <Tab.Screen name="aleatorios" component={aleatorios} />
      <Tab.Screen name="capturados" component={capturados} />
      <Tab.Screen name="favoritos" component={favoritos} />
      <Tab.Screen name="usuario" component={usuario} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}