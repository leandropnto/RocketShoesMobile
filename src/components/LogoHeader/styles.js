import styled from 'styled-components/native';
import logo from '../../assets/logo.png';

export const Container = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
  margin-left: 10px;
`;
