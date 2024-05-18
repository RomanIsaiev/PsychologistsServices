import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import NotFoundPage from 'pages/NotFoundPage';
import Psychologists from 'pages/Psychologists';
import { Route, Routes } from 'react-router-dom';

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
