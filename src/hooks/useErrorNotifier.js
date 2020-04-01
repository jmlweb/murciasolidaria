import { Notifier } from '@airbrake/browser';

const DEFAULT_CONF = {
  severity: 'error',
  component: 'app',
};

const useErrorNotifier = (userConf = {}) => {
  const conf = {
    ...DEFAULT_CONF,
    ...userConf,
  };
  const airbrake = new Notifier({
    projectId: process.env.REACT_APP_AIRBRAKE_PROJECT_ID,
    projectKey: process.env.REACT_APP_AIRBRAKE_PROJECT_KEY,
  });
  return (error) => {
    airbrake.notify({
      error,
      context: conf,
    });
  };
};

export default useErrorNotifier;
