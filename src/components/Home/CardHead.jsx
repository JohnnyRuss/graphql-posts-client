import moment from 'moment';

import styles from './cardHead.module.scss';
import { Avatar } from '../Layouts';

function CardHead({ userName, createdAt }) {
  return (
    <>
      <div className={styles.details}>
        <h3 className={styles.userName}>{userName}</h3>
        <span className={styles.timeAgo}>{moment(new Date(Number(createdAt))).fromNow(true)}</span>
      </div>
      <Avatar className={styles.userFigure} />
    </>
  );
}

export default CardHead;
