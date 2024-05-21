import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import TripPage from './pages/TripPage/TripPage';
//import ComunityPage from './pages/ComunityPage/ComunityPage';
//import ContactPage from './pages/ContactPage/ContactPage';
//import CoordiPage from './pages/CoordiPage/CoordiPage';
import LoadPostPage from './pages/LoadPostPage/LoadPostPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ValidateUserPage from './pages/ValidateUserPage/ValidateUserPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage/ChangePasswordPage';
import AdminPage from './pages/AdminPage/AdminPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ErrorBoundary from './components/ErrorBoundary';
const App = () => {
  const [tripsFiltrados, setTripsFiltrados] = useState(false)
  return (
    <>
      <ErrorBoundary>
      <Header setTripsFiltrados={setTripsFiltrados} />
      <Toaster
        position='top-center'
        toastOptions={{
          duration: 3000,
        }}
      />
      <Routes>
        <Route path='/' element={<HomePage setTripsFiltrados={setTripsFiltrados} tripsFiltrados={tripsFiltrados} />} />
        {/* <Route path='/comunity' element={<ComunityPage />} />
        <Route path='/contact' element={<ContactPage />} />
      <Route path='/coordi' element={<CoordiPage />} /> */}
        <Route path='/trippage/:viajeId/loadpost' element={<LoadPostPage />} />
        <Route path='/changepassword' element={<ChangePasswordPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/users/validate/:registrationCode'
          element={<ValidateUserPage />}
        />
        <Route path='/recover' element={<ResetPasswordPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/trippage/:viajeId' element={<TripPage />} />
        <Route path='*' element={<NotFoundPage />}
        />
      </Routes>
      <Footer />
      </ErrorBoundary>
    </>
  );
};

export default App;
