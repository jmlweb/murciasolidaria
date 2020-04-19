import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const useCounters = () => {
  const firestore = useFirestore();
  const data = useFirestoreCollectionData(
    firestore.collection('config').doc('counters'),
  );
  return data;
};

export default useCounters;
