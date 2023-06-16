import React from 'react';
import {Alert, Dimensions, Linking, Platform, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  disableLoader,
  enableLoader,
  showToast,
} from '../store/actions/AppActions';
import store from '../store';

export function errorHandler(res: any) {
  if ('error' in res) {
    store.dispatch(showToast(res.error.messages[0]));

    switch (res.error.code) {
      case 401:
        // // removeItem("key");
        // store.dispatch(
        //   updateUserStates({
        //     user: {},
        //     token: null,
        //     // userType: null,
        //     providerType: null,
        //   })
        // );

        break;

      case 'invalid_number':
        store.dispatch(showToast('invalid_number'));

        break;
      default:
        // Alert.alert(JSON.stringify(res));
        break;
    }
  } else {
    if (res == 'TypeError: Network request failed') {
      store.dispatch(showToast('No internet connection'));
    }
  }
}