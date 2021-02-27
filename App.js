import React from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import AppContainer from "./pages/AppContainer";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaProvider>
          <Provider store={createStore(reducer)}>
              <AppContainer />
          </Provider>
      </SafeAreaProvider>
  );
}