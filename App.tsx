import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import PokemonList from './src/Components/PokemonList';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <PokemonList />
      </SafeAreaView>
    </Provider>
  );
}
