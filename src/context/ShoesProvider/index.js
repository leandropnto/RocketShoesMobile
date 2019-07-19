import React, { useState } from 'react';
import ShoesContext from '../ShoesContext';

const ShoesProvider = props => {
  const [cart, updateCart] = useState({
    cart: [],
  });

  return (
    <ShoesContext.Provider value={{ cart, updateCart }}>
      {props.children}
    </ShoesContext.Provider>
  );
};

export default ShoesProvider;
