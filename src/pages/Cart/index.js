import React from 'react';
import { connect } from 'react-redux';
import { Image, Text } from 'react-native';
import { Product, ProductList } from './styles';

export function Cart(props) {
  const renderProduct = ({ item }) => {
    console.tron.log(item);

    return (
      <Product>
        <Image source={{ uri: item.image }} />
        <Text>{item.name}</Text>
      </Product>
    );
  };
  const { cart } = props;
  return (
    <ProductList
      data={cart}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
      extraData={props}
      renderItem={renderProduct}
    />
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
