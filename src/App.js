import React from 'react';
import {Provider} from 'react-redux';

import AppContainer from './components/AppContainer';
import store from './redux/store';
import AppRouter from './router/app-router';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <AppRouter />
      </AppContainer>
    </Provider>
  );
};

export default App;
