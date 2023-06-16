import {call, put, select} from 'redux-saga/effects';
import {errorHandler} from '../../utils/utils';
import {disableLoader, enableLoader} from '../actions/AppActions';
import {updateStates} from '../actions/HomeActions';

const customerHomeApi = () => {
  return fetch(
    'https://cx6bmbl1e3.execute-api.us-east-2.amazonaws.com/venues',
    {
      method: 'GET',
    },
  )
    .then(response => response.json())
    .then(result => {
      console.log('result', result);
      return result.results;
    })
    .catch(error => console.log('error', error));
};

export function* getHome({payload}: any): any {
  yield put(enableLoader());
  const response = yield call(customerHomeApi, payload);
  yield put(disableLoader());

  console.log('response', response);
  if ( response ) {
    yield put(updateStates({homeData: response}));
  } else {
    errorHandler(response);
  }
}
