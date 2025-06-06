// src/hooks/useClientOnly.js
'use client';

import { useState, useEffect } from 'react';

export const useClientOnly = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};