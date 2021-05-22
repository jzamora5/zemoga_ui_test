import { GET_DATA, LOADING, ERROR } from '../types';

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
