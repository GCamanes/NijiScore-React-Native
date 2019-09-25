import exitSaga from './user/exit-saga';
import loginSaga from './user/login-saga';
import logoutSaga from './user/logout-saga';
import initHomeSaga from './home/init-home-saga';
import {all} from 'redux-saga/effects';

const sagas = [
  exitSaga(),
  loginSaga(),
  logoutSaga(),
  initHomeSaga(),
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
