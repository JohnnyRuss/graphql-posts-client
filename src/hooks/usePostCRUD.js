import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_POST_QUERY } from '../store/queries';

function usePostCRUD(query, initialState = {}, type) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(null);

  const [executeQuery, { loading }] = useMutation(query, {
    update(proxy, { data }) {
      if (type === 'CREATE_POST') {
        const { getPosts } = proxy.readQuery({ query: FETCH_POST_QUERY });
        proxy.writeQuery({
          query: FETCH_POST_QUERY,
          data: { getPosts: [data.createPost, ...getPosts] },
        });
      }

      if (type === 'DELETE_POST') {
        const { getPosts } = proxy.readQuery({ query: FETCH_POST_QUERY });
        const id = data.deletePost.id;

        proxy.writeQuery({
          query: FETCH_POST_QUERY,
          data: { getPosts: getPosts.filter((p) => p.id !== id) },
        });
      }

      setForm(initialState);
    },

    onError(err) {
      console.log(form);
      console.log(err.clientErrors);
      console.log(err.graphQLErrors[0]);
      setErrors(err.clientErrors.errors);
    },

    variables: form,
  });

  function onChangeHandler(e) {
    const field = e.target.name;
    const value = e.target.value;

    setForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  function executor() {
    executeQuery();
  }

  return { executor, onChangeHandler, form, errors, loading };
}

export default usePostCRUD;
