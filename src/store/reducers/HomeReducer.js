import { UPDATE_STATE } from '../actions/HomeActions';

const initialState = {
    homeData: [],
};

export default HomeReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
