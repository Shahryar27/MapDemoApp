/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';

 import React from 'react';
 import Home from './Home'
 import { Provider } from 'react-redux';
 import store from './store';
 import { Loader } from './containers/SafeAreaContainer';
 
 const App = () => {
 
   const loader = store.getState().AppReducer.loader;
   
   return (
     <Provider store={store}> 
       { loader && <Loader /> }
       <Home />
     </Provider>
   )
 };
 
 
 export default App;
 