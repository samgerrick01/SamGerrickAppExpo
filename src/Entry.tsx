import { store } from '@redux/store';
import HomePage from '@screens/Home';
import logger from '@utils/logger';
import React from 'react';
import { Provider } from 'react-redux';

const Entry = () => {
  logger('App Started!');

  return (
    // <MobxProvider>
    //   <GraphQLProvider>
    //     <AppNavigator />
    //     <Modal />
    //     <SnackBar />
    //   </GraphQLProvider>
    // </MobxProvider>
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default Entry;
