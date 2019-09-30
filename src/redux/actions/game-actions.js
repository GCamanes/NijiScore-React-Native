import AppConstants from '../../app/app.constants';

export function addGame(game) {
  return {
    type: AppConstants.EVENTS.ADD_GAME_SAGA,
    payload: game,
  };
}

export function updateGame(game, id) {
  return {
    type: AppConstants.EVENTS.UPDATE_GAME_SAGA,
    payload: game,
    id,
  };
}
