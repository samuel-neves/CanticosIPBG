import React from 'react';
import { TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TextInput } from './styles';

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  return (
    <Container>
      <TextInput
        keyboardAppearance="light"
        placeholderTextColor="#bbb"
        {...rest}
      />

      <Icon name="search" size={22} color="#bbb" />
    </Container>
  );
};

export default Input;
