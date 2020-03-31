import { useCallback } from 'react';
import { useToast } from '@chakra-ui/core';

const DEFAULT_OPTIONS = {
  title: 'Ha habido un problema',
  status: 'error',
  duration: 9000,
  isClosable: true,
  position: 'top-right',
};

const emptyObject = {};

const useAlertNotification = (globalConf = emptyObject) => {
  const toast = useToast();
  return useCallback(
    (localConf = emptyObject) => {
      const conf = {
        ...DEFAULT_OPTIONS,
        ...globalConf,
        ...localConf,
      };
      return toast(conf);
    },
    [globalConf, toast],
  );
};

export default useAlertNotification;
