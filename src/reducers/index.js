import { GET_DATA, UPDATE_DATA, LOADING, ERROR } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case UPDATE_DATA:
      const { documentId, vote } = action.payload;

      const newData = [...state.data];
      const cardIdx = newData.findIndex((card) => card.id === documentId);

      if (newData[cardIdx]) newData[cardIdx].votes[vote] += 1;

      return {
        data: newData,
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
