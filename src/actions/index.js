import { GET_DATA, LOADING, ERROR } from '../types';
import { db } from '../config/firebase';

const DATA_COLLECTION = 'data';

export const getData = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const dataCollection = db.collection(DATA_COLLECTION);
    const snapshot = await dataCollection.get();

    const data = snapshot.docs.map((doc) => {
      const docData = doc.data();
      docData.lastUpdated = docData.lastUpdated.toDate();
      docData.id = doc.id;
      return docData;
    });

    dispatch({
      type: GET_DATA,
      payload: data,
    });

    //
  } catch (err) {
    console.log('Error: ', err.message);
    dispatch({
      type: ERROR,
      payload: 'Something went wrong, try again later',
    });
  }
};
