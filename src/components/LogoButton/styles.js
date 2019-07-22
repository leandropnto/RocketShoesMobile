import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 10px;
  position: relative;
`;
export const LabelCart = styled.Text`
  font-size: 12px;
  color: white;
  background: ${colors.primary};
  position: absolute;
  top: -15px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  text-align: center;
`;
