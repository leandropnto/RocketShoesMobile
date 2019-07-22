import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';

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

export function Home(props) {
  const [products, setProducts] = useState([]);
  const { addToCart, amount, cartLength } = props;

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

  const handleClickAddToCart = id => {
    console.tron.log(amount);
    addToCart(id);
  };

  return (
    <Container>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(item.id)}
        extraData={props}
        renderItem={({ item }) => (
          <Product key={item.id}>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <ProductAdd onPress={() => handleClickAddToCart(item.id)}>
              <ProductAmount>
                <ProductIcon name="add-shopping-cart" color="#FFF" size={20} />
                <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
              </ProductAmount>
              <ProductAddText>Adicionar</ProductAddText>
            </ProductAdd>
          </Product>
        )}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
  cartLength: state.cart.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
