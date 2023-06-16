export const UPDATE_STATE = 'HOME_STATE_UPDATE';

export const GET_HOME = 'GET_HOME';

export const updateStates = payload => {
    return {
      type: UPDATE_STATE,
      payload,
    };
};

export const getHomeAction = (payload) => ({ type: GET_HOME, payload });
