import { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  const debounce = (func, delay) => {
    let inDebounce;
    return function() {
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
    ) < document.documentElement.offsetHeight - 10 || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;