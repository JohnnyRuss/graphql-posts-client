import styles from './cardConfirmModal.module.scss';

function CardConfirmModal({ closeConfirmDeleteWindow, deletePostHandler }) {
  return (
    <div className={styles.confirmModal}>
      <p className={styles.question}>are you sure you want to delete this post ?</p>
      <button className={styles.btn} onClick={deletePostHandler}>
        yes
      </button>
      <button className={styles.btn} onClick={closeConfirmDeleteWindow}>
        cancel
      </button>
    </div>
  );
}

export default CardConfirmModal;
