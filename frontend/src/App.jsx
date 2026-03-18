import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));

export default function App() {
  return (
    <Suspense fallback={<div style={{ backgroundColor: '#16171d', height: '100vh' }} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}