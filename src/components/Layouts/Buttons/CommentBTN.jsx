import styles from './btn.module.scss';
import { AiOutlineComment } from 'react-icons/ai';

function CardCommentBTN({ handleComment, commentCount, className }) {
  return (
    <button className={`${styles.btn} ${styles.commentBtn} ${className}`} onClick={handleComment}>
      <span>
        <AiOutlineComment />
      </span>
      <span>{commentCount}</span>
    </button>
  );
}

export default CardCommentBTN;
