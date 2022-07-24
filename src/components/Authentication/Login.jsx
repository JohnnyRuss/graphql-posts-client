import { LOG_IN_USER } from '../../store/queries';
import { useAuthenticationForm } from '../../hooks';

import styles from './auth.module.scss';
import InputField from './InputField';
import Button from './Button';
import { Spinner } from '../Layouts';

function Login() {
  const { handleForm, form, handleFormChange, loading } = useAuthenticationForm(LOG_IN_USER, {
    userName: '',
    password: '',
  });

  return (
    <form className={styles.authForm} onSubmit={handleForm}>
      {loading && <Spinner />}
      <h4 className={styles.heading}>Login</h4>
      <InputField
        type='text'
        defaultValue={form.userName}
        label='username'
        id='userName'
        handler={handleFormChange}
      />
      <InputField
        type='password'
        defaultValue={form.password}
        label='password'
        id='password'
        handler={handleFormChange}
      />
      <Button caption='login' />
    </form>
  );
}

export default Login;
