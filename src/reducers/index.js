import { GET_DATA, LOADING, ERROR } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      break;
  }
  return state;
};

export default reducer;
