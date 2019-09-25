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
  },
  FIRESTORE: {},
  ROUTES: {
    HOME: 'home',
    USER_LOGIN: 'user_login',
  },
};

export default AppConstants;
