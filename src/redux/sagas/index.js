import exitSaga from './user/exit-saga';
import loginSaga from './user/login-saga';
import logoutSaga from './user/logout-saga';
import {all} from 'redux-saga/effects';

const sagas = [
  exitSaga(),
  loginSaga(),
  logoutSaga(),
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
