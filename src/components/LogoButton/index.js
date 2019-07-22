import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, LabelCart } from './styles';

export function LogoButton(props) {
  const { cartLenght } = props;
  return (
    <Container>
      <Icon name="shopping-basket" color="#FFF" size={24} />
      <LabelCart>{cartLenght || 0}</LabelCart>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartLenght: state.cart.length,
});

export default connect(mapStateToProps)(LogoButton);
