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
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 500));
    return () => window.removeEventListener('scroll', debounce(handleScroll, 500));
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) return;
    console.log('Perform fetch');
    callback();
  }, [callback, isFetching]);

  function handleScroll() {
    if (window.innerHeight + Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    ) < document.documentElement.offsetHeight - 10 || isFetching) return;
    console.log('Height is critical');
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;