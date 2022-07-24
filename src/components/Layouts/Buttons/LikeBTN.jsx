import { useContext } from 'react';
import { AppContext } from '../../../store/context/app';

import styles from './btn.module.scss';
import { AiFillHeart } from 'react-icons/ai';

function CardLikeBTN({ handleReaction, likes, likeCount, className }) {
  const { user } = useContext(AppContext);
  return (
    <button className={`${styles.btn} ${styles.likeBtn} ${className} `} onClick={handleReaction}>
      <span className={likes?.some((like) => like.userName === user?.userName) ? styles.liked : ''}>
        <AiFillHeart />
      </span>
      <span>{likeCount}</span>
    </button>
  );
}

export default CardLikeBTN;
