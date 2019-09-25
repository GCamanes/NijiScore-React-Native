import AppConstants from '../../app/app.constants';

const initialState = {
  games: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.EVENTS.SET_GAMES_REDUX:
      return {
        ...state,
        games: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
