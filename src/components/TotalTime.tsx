import { useEffect, useState } from 'preact/hooks';
import { getI18n } from '@/utils/config';

export default function TotalTime() {
  const [loadTime, setLoadTime] = useState<string>('Calculating...');
  const [i18n, setI18n] = useState(getI18n('en'));

  useEffect(() => {
    const lang = document.documentElement.lang || 'en';
    setI18n(getI18n(lang));

    const handleLoadTime = (loadTimeValue: number) => {
      if (loadTimeValue < 100) {
        setLoadTime('Instant load 🚀');
      } else {
        setLoadTime(`${loadTimeValue.toFixed(2)} ms`);
      }
    };

    if (
      typeof window !== 'undefined' &&
      window.performance &&
      window.PerformanceObserver
    ) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntriesByType('navigation');
        for (const entry of entries) {
          if (
            entry.entryType === 'navigation' &&
            'domContentLoadedEventEnd' in entry
          ) {
            const navigationEntry = entry as PerformanceNavigationTiming;
            const calculatedLoadTime =
              navigationEntry.domContentLoadedEventEnd -
              navigationEntry.startTime;
            handleLoadTime(Math.max(0, calculatedLoadTime));
          }
        }
      });

      observer.observe({ type: 'navigation', buffered: true });

      return () => observer.disconnect();
    } else if (typeof window !== 'undefined') {
      const startTime = Date.now();
      const onLoad = () => {
        const calculatedLoadTime = Date.now() - startTime;
        handleLoadTime(Math.max(0, calculatedLoadTime));
        window.removeEventListener('load', onLoad);
      };
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  return (
    <div className='load-time-container text-xs text-center font-mono'>
      <p className='m-0 text-brand-text-muted'>
        {i18n.footer.totalLoadTime}:{' '}
        <span
          id='load-time'
          className='font-bold text-brand-info'
          aria-live='polite'
        >
          {loadTime}
        </span>
      </p>
    </div>
  );
}
