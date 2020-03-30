import { useToast } from '@chakra-ui/core';

const DEFAULT_OPTIONS = {
  title: 'Ha habido un problema',
  status: 'error',
  duration: 9000,
  isClosable: true,
  position: 'top-right',
};

const useAlertNotification = (globalConf = {}) => {
  const toast = useToast();
  return (localConf = {}) => {
    const conf = {
      ...DEFAULT_OPTIONS,
      ...globalConf,
      ...localConf,
    };
    return toast(conf);
  };
};

export default useAlertNotification;
