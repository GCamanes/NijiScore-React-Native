import AppConstants from '../../app/app.constants';

export function goToAddGamePage() {
  return {
    type: AppConstants.EVENTS.ADD_GAME_SAGA,
  };
}
