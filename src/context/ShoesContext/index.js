import { createContext } from 'react';

const ShoesContext = createContext({ cart: [], updateCart: () => {} });

export default ShoesContext;
