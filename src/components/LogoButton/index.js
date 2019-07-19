import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default function LogoButton() {
  return (
    <Container>
      <Icon name="shopping-basket" color="#FFF" size={24} />
    </Container>
  );
}
