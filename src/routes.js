import React from 'react';
import { View } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';
import LogoHeader from './components/LogoHeader';
import LogoButton from './components/LogoButton';
import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.primary,
        headerStyle: {
          backgroundColor: colors.dark,
        },
        headerLeft: <LogoHeader />,
      },
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
