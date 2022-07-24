import { useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../store/context/app';

function useAuthenticationForm(query, initialState = {}) {
  const { login } = useContext(AppContext);

  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  function handleFormChange(e) {
    const field = e.target.name;
    const value = e.target.value;

    setForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  const [executeQuery, { loading }] = useMutation(query, {
    update(proxy, result) {
      login(result.data);
      setForm(initialState);
      navigate('/');
    },
    onError(err) {
      setErrors(err.clientErrors.errors);
    },
    variables: form,
  });

  function handleForm(e) {
    e.preventDefault();
    executeQuery();
  }

  return { handleForm, form, handleFormChange, loading, errors };
}

export default useAuthenticationForm;
