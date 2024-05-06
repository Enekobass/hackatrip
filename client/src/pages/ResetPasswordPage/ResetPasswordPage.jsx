import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import ResetPasswordForm from '../../forms/ResetPasswordForm/ResetPasswordForm';

const ResetPasswordPage = () => {
  const { authRecoverPassword } = useContext(AuthContext);
  return (
    <main>
      <ResetPasswordForm authRecoverPassword={authRecoverPassword} />
    </main>
  );
};

export default ResetPasswordPage;
