import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/Navigation/Navigation'
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
     
    </Provider>
  )
}

export default App