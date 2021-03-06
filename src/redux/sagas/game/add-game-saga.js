import {put, select, takeLatest} from 'redux-saga/effects';

import AppConstants from '../../../app/app.constants';
import FirestoreService from '../../../api/firestore';
import showAlert from '../../../utils/showAlert';
import { Actions } from 'react-native-router-flux';

async function getGames() {
  try {
    const games = await FirestoreService.getGames();
    return games;
  } catch (error) {
    throw new Error('GETTING_GAMES');
  }
}

async function updateGame(game, id) {
  try {
    await FirestoreService.updateGame(game, id);
  } catch (error) {
    console.log(error);
    throw new Error('UPDATING_GAME');
  }
}

export function* addGameSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.ADD_GAME, loading: true},
  });
  try {
    const getGamesStore = state => state.game.games;
    const gamesStore = yield select(getGamesStore);

    console.log('GAME', action.payload, action.id);

    if (
      gamesStore
        .filter(game => game.id !== action.id)
        .filter(game => game.name === action.payload.name).length > 0
    ) {
      throw new Error('NAME_UNAVAILABLE');
    }

    if (action.id) {
      yield updateGame(action.payload, action.id);
    } else {
      yield FirestoreService.addGame({...action.payload, games: 0});
    }

    const games = yield getGames();
    yield put({
      type: AppConstants.EVENTS.SET_GAMES_REDUX,
      payload: games,
    });
    Actions.pop();
  } catch (error) {
    if (error.message === 'NAME_UNAVAILABLE') {
      showAlert('This name is not available', 'Error');
    } else if (error.message === 'GETTING_GAMES') {
      showAlert('Error while getting games from firebase', 'Error');
    } else if (error.message === 'UPDATING_GAME') {
      showAlert('Error while updating game to firebase', 'Error');
    } else {
      showAlert('Error while adding game to firebase', 'Error');
    }
  }
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.ADD_GAME, loading: false},
  });
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.ADD_GAME_SAGA, addGameSaga);
  yield takeLatest(AppConstants.EVENTS.UPDATE_GAME_SAGA, addGameSaga);
}
