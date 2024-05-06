import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import ContinentPage from './pages/ContinentPage/ContinentPage';
import CountryPage from './pages/CountryPage/CountryPage';
import ComunityPage from './pages/ComunityPage/ComunityPage';
import LoadPostPage from './pages/LoadPostPage/LoadPostPage';
import ContactPage from './pages/ContactPage/ContactPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ValidateUserPage from './pages/ValidateUserPage/ValidateUserPage';
import AdminPage from './pages/AdminPage/AdminPage';
import React from 'react';
import PasswordResetForm from './components/PasswordResetForm';

const App = () => {
  return (
    <>
      <Header />
      <Toaster
        position='top-center'
        toastOptions={{
          duration: 3000,
        }}
      />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/continent' element={<ContinentPage />} />
        <Route path='/country' element={<CountryPage />} />
        <Route path='/comunity' element={<ComunityPage />} />
        <Route path='/loadPost' element={<LoadPostPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/users/validate/:registrationCode'
          element={<ValidateUserPage />}
        />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
