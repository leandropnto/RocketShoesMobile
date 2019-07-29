import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { FlatList } from 'react-native';

export const Container = styled.View`
  margin: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Product = styled.View`
  flex-direction: row;
  background: white;
  height: 100px;
`;

export const ProductImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const ProductName = styled.Text`
  color: ${colors.primary};
`;
export const ProductList = styled(FlatList)`
  flex: 1;
  margin: 8px;
`;
