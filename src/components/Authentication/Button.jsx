import styles from './auth.module.scss';

function Button({ caption, handler }) {
  return (
    <button className={styles.confirmBTN} type='submit'>
      {caption}
    </button>
  );
}

export default Button;
