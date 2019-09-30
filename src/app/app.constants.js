const AppConstants = {
  EVENTS: {
    // login
    INIT_LOGIN_PAGE_SAGA: 'INIT_LOGIN_PAGE_SAGA',
    LOGIN_REDUX: 'LOGIN_REDUX',
    LOGIN_SAGA: 'LOGIN_SAGA',
    LOGOUT_REDUX: 'LOGOUT_REDUX',
    LOGOUT_SAGA: 'LOGOUT_SAGA',
    EXIT_APPLICATION: 'EXIT_APPLICATION',
    // router
    RESET_ROUTER_STATE: 'RESET_ROUTER_STATE',
    SET_LOADER: 'SET_LOADER',
    // connectivity
    UPDATE_CONNECTIVITY: 'UPDATE_CONNECTIVITY',
    // clear
    CLEAR_APP_REDUCER: 'CLEAR_APP_REDUCER',
    // games
    GET_GAMES_SAGA: 'GET_GAMES_SAGA',
    SET_GAMES_REDUX: 'SET_GAMES_REDUX',
    ADD_GAME_SAGA: 'ADD_GAME_SAGA',
    UPDATE_GAME_SAGA: 'UPDATE_GAME_SAGA',
    // player
    GET_PLAYERS_SAGA: 'GET_PLAYERS_SAGA',
    SET_PLAYERS_REDUX: 'SET_PLAYERS_REDUX',
    ADD_PLAYER_SAGA: 'ADD_PLAYER_SAGA',
    // pages
    INIT_HOME_SAGA: 'INIT_HOME_SAGA',
  },
  FIRESTORE: {
    GAMES_COLLECTION: 'games',
    PLAYERS_COLLECTION: 'players',
  },
  ROUTES: {
    HOME: 'home',
    USER_LOGIN: 'user_login',
    ALL_GAMES: 'all_games',
    ADD_GAME: 'add_game',
  },
};

export default AppConstants;
