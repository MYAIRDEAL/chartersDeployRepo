import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current route path

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [pathname]); // Dependency on the pathname

  return null; // This component does not render anything
};

export default ScrollToTop;
