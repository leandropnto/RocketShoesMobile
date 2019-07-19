import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import api from '../../../services/api';
import { Container, Product, ProductImage, ProductTitle } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/products');
      setProducts(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);
  return (
    <Container>
      <FlatList
        data={products}
        horizontal
        keyExtractor={(item, index) => String(item.id)}
        renderItem={({ item }) => (
          <Product key={item.id}>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
          </Product>
        )}
      />
    </Container>
  );
}
