import { useCallback } from 'react';
import { useAuth } from 'reactfire';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useToggler } from 'reactponsive';

import useAlertNotification from './useAlertNotification';
import useErrorNotifier from './useErrorNotifier';

const provider = new firebase.auth.GoogleAuthProvider();

const useGoogleSignin = (cb) => {
  const errorNotify = useErrorNotifier({
    severity: 'warning',
    component: 'google-signin',
  });
  const auth = useAuth();
  auth.useDeviceLanguage();
  const isDesktop = useToggler('lg');
  const notify = useAlertNotification({
    title: 'Ha habido un problema al intentar loguearse.',
  });

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

      if (cb) {
        cb();
      }
    } catch (e) {
      notify({
        description: e.message,
      });
      errorNotify(e);
    }
  }, [cb, getSignInResult, notify, errorNotify]);

  return onClick;
};

export default useGoogleSignin;
