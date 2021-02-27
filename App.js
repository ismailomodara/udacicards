import React from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from "./utils/notifications";

import AppContainer from "./pages/AppContainer";
import { SafeAreaProvider } from 'react-native-safe-area-context';

class App extends React.Component {
    componentDidMount() {
        setLocalNotification();
    }

  render() {
      return (
          <SafeAreaProvider>
              <Provider store={createStore(reducer)}>
                  <AppContainer />
              </Provider>
          </SafeAreaProvider>
      );
  }
}

export default App