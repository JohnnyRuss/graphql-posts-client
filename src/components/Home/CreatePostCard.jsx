// import { useContext } from 'react';

// import { AppContext } from '../../store/context/app';
import { usePostCRUD } from '../../hooks';
import { CREATE_POST } from '../../store/queries';

import styles from './createPostCard.module.scss';

function CreatePostCard() {
  // const { createPost } = useContext(AppContext);
  const { executor, onChangeHandler, form } = usePostCRUD(CREATE_POST, { body: '' }, 'CREATE_POST');

  function handleSharePost(e) {
    e.preventDefault();
    executor();
  }

  return (
    <form className={styles.createPostCard} onSubmit={handleSharePost}>
      <h4 className={styles.heading}>create a post:</h4>
      <textarea
        type='text'
        className={styles.textArea}
        name='body'
        value={form.body}
        onChange={onChangeHandler}
      />
      <button className={styles.sharePostBtn} type='submit'>
        share
      </button>
    </form>
  );
}

export default CreatePostCard;
//4:13:00
