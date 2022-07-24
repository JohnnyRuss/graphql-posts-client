import { REGISTER_USER } from '../../store/queries';
import { useAuthenticationForm } from '../../hooks';

import styles from './auth.module.scss';
import InputField from './InputField';
import Button from './Button';
import { Spinner } from '../Layouts';

function Register() {
  const { handleForm, form, handleFormChange, loading } = useAuthenticationForm(REGISTER_USER, {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <form className={styles.authForm} onSubmit={handleForm}>
      {loading && <Spinner />}
      <h4 className={styles.heading}>Register</h4>
      <InputField
        type='text'
        defaultValue={form.userName}
        label='username'
        id='userName'
        handler={handleFormChange}
      />
      <InputField
        type='email'
        defaultValue={form.email}
        label='email'
        id='email'
        handler={handleFormChange}
      />
      <InputField
        type='password'
        defaultValue={form.password}
        label='password'
        id='password'
        handler={handleFormChange}
      />
      <InputField
        type='password'
        defaultValue={form.confirmPassword}
        label='confirm password'
        id='confirmPassword'
        handler={handleFormChange}
      />
      <Button caption='register' />
    </form>
  );
}

export default Register;
