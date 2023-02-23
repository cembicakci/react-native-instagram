import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './Screens';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';
import { store } from './redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}