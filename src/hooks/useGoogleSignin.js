import { useAuth } from 'reactfire';
import firebase from 'firebase/app';
import 'firebase/auth';
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

  const getSignInResult = () =>
    isDesktop
      ? auth.signInWithPopup(provider)
      : auth.signInWithRedirect(provider);

  const onClick = async () => {
    try {
      await getSignInResult();
      if (cb) {
        cb();
      }
    } catch (e) {
      notify({
        description: e.message,
      });
    }
  };

  return onClick;
};

export default useGoogleSignin;