import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import logger from '@utils/logger';

const index = () => {
  const { session } = useSelector((state: RootState) => state.auth);

  logger('Session:', session);
  return (
    <View>
      <Text>Home Page</Text>
    </View>
  );
};

export default index;
