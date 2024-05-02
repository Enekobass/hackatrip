import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ValidateUserPage from './pages/ValidateUserPage/ValidateUserPage';

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
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/users/validate/:registrationCode'
          element={<ValidateUserPage />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
