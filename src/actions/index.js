import { GET_DATA, UPDATE_DATA, LOADING, ERROR } from '../types';
import { db } from '../config/firebase';

const DATA_COLLECTION = 'data';

export const getData = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const dataCollection = db.collection(DATA_COLLECTION);
    const snapshot = await dataCollection.get();

    const data = [];

    snapshot.docs.forEach((doc) => {
      const docData = doc.data();
      docData.lastUpdated = docData.lastUpdated.toDate();
      docData.id = doc.id;
      data[docData.order - 1] = docData;
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

export const updateData = (documentId, vote) => async (dispatch) => {
  vote = vote === 'up' ? 'positive' : 'negative';

  try {
    const dataCollection = db.collection(DATA_COLLECTION);

    const data = (await dataCollection.doc(documentId).get()).data();

    await dataCollection.doc(documentId).update({
      [`votes.${vote}`]: data.votes[vote] + 1,
    });

    dispatch({
      type: UPDATE_DATA,
      payload: { documentId, vote },
    });
  } catch (err) {
    console.log('Error: ', err.message);
  }
};
