import styles from './postForm.module.scss';

function PostForm({ handleAddComment, textAreaChange, textForm }) {
  return (
    <form className={styles.form} onSubmit={handleAddComment}>
      <h4 className={styles.formHeading}>add a comment</h4>
      <div className={styles.inputField}>
        <textarea
          className={styles.textArea}
          name='body'
          value={textForm.body}
          onChange={textAreaChange}
        />
        <button className={styles.createPostBtn} type='submit'>
          submit
        </button>
      </div>
    </form>
  );
}

export default PostForm;
