import React from 'react';
import { StatusBar } from 'react-native';
import { Block, Text } from 'expo-ui-kit';

export default ({ style }) => {
  return (
    <Block
      color="#f0ff2f"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <StatusBar />
      <Text h2 white center>
        Finans Hesaplamaları
      </Text>
    </Block>
  );
};