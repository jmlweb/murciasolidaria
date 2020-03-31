import { useCallback } from 'react';
import { useAuth, useFirestore } from 'reactfire';
import firebase from 'firebase/app';
import { useToggler } from 'reactponsive';
import useAlertNotification from './useAlertNotification';

const provider = new firebase.auth.GoogleAuthProvider();

const useGoogleSignin = (cb) => {
  const auth = useAuth();
  auth.useDeviceLanguage();
  const isDesktop = useToggler('lg');
  const notify = useAlertNotification({
    title: 'Ha habido un problema al intentar loguearse.',
  });
  const firestore = useFirestore();

  const updateUser = useCallback(async () => {
    const { currentUser } = auth;
    const userRef = firestore.collection('users/').doc(currentUser.uid);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      await userRef.set({
        name: currentUser.displayName,
        email: currentUser.email,
        isAdmin: false,
      });
    }
  }, [firestore, auth]);

  const getSignInResult = useCallback(
    () =>
      isDesktop
        ? auth.signInWithPopup(provider)
        : auth.signInWithRedirect(provider),
    [isDesktop, auth],
  );

  const onClick = useCallback(async () => {
    try {
      await getSignInResult();
      await updateUser();

      if (cb) {
        cb();
      }
    } catch (e) {
      notify({
        description: e.message,
      });
    }
  }, [cb, getSignInResult, notify, updateUser]);

  return onClick;
};

export default useGoogleSignin;
