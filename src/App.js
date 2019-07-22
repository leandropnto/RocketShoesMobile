import React from 'react';
import { StatusBar } from 'react-native';
import './config/reactotronConfig';
import Routes from './routes';
import colors from './styles/colors';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
        <Routes />
      </Provider>
    </>
  );
}
