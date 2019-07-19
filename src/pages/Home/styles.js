import styled from 'styled-components/native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  background: ${colors.dark};
  margin: 20px 0 30px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductAdd = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAddText = styled.Text`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  flex: 1;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${colors.primaryDarker};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
`;

export const ProductAmountText = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;

export const ProductIcon = styled(Icon)`
  margin: 0 5px 0;
  height: 100%;
  align-items: center;
`;
