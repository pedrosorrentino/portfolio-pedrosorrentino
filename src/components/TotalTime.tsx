import { useEffect, useState } from 'preact/hooks';

export default function TotalTime() {
  const [loadTime, setLoadTime] = useState<string>('Calculating...');

  useEffect(() => {
    const handleLoadTime = (loadTime: number) => {
      if (loadTime < 100) {
        setLoadTime('Instant load 🚀');
      } else {
        setLoadTime(`${loadTime.toFixed(2)} ms`);
      }
    };

    if (window.PerformanceObserver) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntriesByType('navigation');
        for (const entry of entries) {
          if (
            entry.entryType === 'navigation' &&
            'domContentLoadedEventEnd' in entry
          ) {
            const navigationEntry = entry as PerformanceNavigationTiming;
            const loadTime =
              navigationEntry.domContentLoadedEventEnd -
              navigationEntry.startTime;
            handleLoadTime(loadTime);
          }
        }
      });

      observer.observe({ type: 'navigation', buffered: true });

      return () => observer.disconnect();
    } else {
      const startTime = Date.now();
      window.addEventListener('load', () => {
        const loadTime = Date.now() - startTime;
        handleLoadTime(loadTime);
      });
    }
  }, []);

  return (
    <div className='load-time-container text-xs p-4 text-center font-mono'>
      <p className='m-0 text-gray-700 dark:text-gray-200'>
        Total load time:{' '}
        <span
          id='load-time'
          className='font-bold text-blue-500 dark:text-purple-400'
          aria-live='polite'
        >
          {loadTime}
        </span>
      </p>
    </div>
  );
}
