import React from 'react';
import Index from './components/Index';
import { Provider } from 'react-redux';
import store from './components/store';
function App() {
  return <Provider store={store}>
    <Index></Index>
  </Provider>
}

export default App;
