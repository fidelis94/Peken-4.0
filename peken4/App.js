import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/index';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from './src/navigations/RootStackNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
