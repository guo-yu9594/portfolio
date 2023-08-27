import * as React from 'react';
import Box from '@mui/material/Box';
import HomeStep1 from './components/HomeStep1';
import HomeStep2 from './components/HomeStep2';
import HomeStep3 from './components/HomeStep3';

export default function HomePage() {
  return (
    <>
      <HomeStep1 />
      <HomeStep2 />
      <HomeStep3 />
    </>
  );
}
