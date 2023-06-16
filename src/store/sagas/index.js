import {takeLatest} from 'redux-saga/effects';
import {
  GET_HOME,
} from '../actions/HomeActions';
import { getHome } from './homeSaga';

export default function* mySaga() {
    yield takeLatest(GET_HOME, getHome);
}