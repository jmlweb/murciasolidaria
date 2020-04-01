import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from 'reactfire';

const useLogPage = () => {
  const location = useLocation();
  const analytics = useAnalytics();
  useEffect(() => {
    analytics.logEvent('page_view', { path_name: location.pathname });
  }, [analytics, location.pathname]);
};

export default useLogPage;
