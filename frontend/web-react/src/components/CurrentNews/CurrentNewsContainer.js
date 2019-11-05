import React from 'react';
import { useLocation } from 'react-router-dom';
import CurrentNews from './CurrentNews';

export default function CurrentNewsContainer() {
  const location = useLocation();
  return (
    <CurrentNews key={location.key} />
  );
}