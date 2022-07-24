import styles from './btn.module.scss';
import { AiFillDelete } from 'react-icons/ai';

function CardDeleteBTN({ openConfirmDeleteWindow, className }) {
  return (
    <button className={`${styles.deleteBtn} ${className}`} onClick={openConfirmDeleteWindow}>
      <AiFillDelete />
    </button>
  );
}

export default CardDeleteBTN;
