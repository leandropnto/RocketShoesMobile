import React, { useState, useEffect, useContext } from 'react';
import { FlatList } from 'react-native';
import api from '../../../services/api';
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAdd,
  ProductAddText,
  ProductAmount,
  ProductIcon,
  ProductAmountText,
} from './styles';

import formatPrice from '../../util/format';
import shoesContext from '../../context/ShoesContext';

export default function Home() {
  const { cart, updateCart } = useContext(shoesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/products');
      const data = response.data.map(item => {
        return { ...item, priceFormatted: formatPrice(item.price) };
      });
      setProducts(data);
    }
    fetchData();
  }, []);

  const addToCart = id => {
    console.log('ID:' + id);
    console.log(cart);
    updateCart([...cart, id]);
  };

  return (
    <Container>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(item.id)}
        renderItem={({ item }) => (
          <Product key={item.id}>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <ProductAdd onPress={() => addToCart(item.id)}>
              <ProductAmount>
                <ProductIcon name="add-shopping-cart" color="#FFF" size={20} />
                <ProductAmountText>1</ProductAmountText>
              </ProductAmount>
              <ProductAddText>Adicionar {cart.length} </ProductAddText>
            </ProductAdd>
          </Product>
        )}
      />
    </Container>
  );
}
