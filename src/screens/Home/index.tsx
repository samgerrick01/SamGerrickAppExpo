import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import logger from '@utils/logger';
import { StatusBar } from 'expo-status-bar';

const index = () => {
  const { session } = useSelector((state: RootState) => state.auth);

  logger('Session:', session);
  return (
    <View className='flex-1 items-center justify-center bg-gray-800'>
      <StatusBar style='light' />
      <Text className='text-red-500 text-3xl'>Home Page</Text>
    </View>
  );
};

export default index;
