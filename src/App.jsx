import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Psychologists = lazy(() => import('./pages/Psychologists'));
const Favorites = lazy(() => import('./pages/Favorites'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="psychologists" element={<Psychologists />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
