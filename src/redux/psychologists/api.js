import app from 'api/firebase/firebase';
import { getDatabase, ref, get } from 'firebase/database';

export const fetchDataFromDatabase = async path => {
  const database = getDatabase(app);
  const dbRef = ref(database, path);

  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    throw new Error('No data available');
  }
};
