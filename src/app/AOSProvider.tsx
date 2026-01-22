'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    (async () => {
      const AOS = (await import('aos')).default;
      AOS.init({ duration: 500 });
    })();
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
