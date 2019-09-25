import AppConstants from '../../app/app.constants';

export function initHomePage() {
  return {type: AppConstants.EVENTS.INIT_HOME_SAGA};
}
