import React from 'react';
import AppContainer from "./pages/AppContainer";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaProvider>
          <AppContainer />
      </SafeAreaProvider>
  );
}