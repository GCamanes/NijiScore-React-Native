import AppConstants from '../../app/app.constants';

export function addGame(game) {
  return {
    type: AppConstants.EVENTS.ADD_GAME_SAGA,
    payload: game,
  };
}
