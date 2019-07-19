import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import colors from './styles/colors';
import ShoesContext from './context/ShoesContext';

export default function App() {
  const [cart, setCart] = useState({
    cart: [10, 20, 30],
    updateCart: item => setCart(cart),
  });

  return (
    <>
      <ShoesContext.Provider value={cart}>
        <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
        <Routes />
      </ShoesContext.Provider>
    </>
  );
}
