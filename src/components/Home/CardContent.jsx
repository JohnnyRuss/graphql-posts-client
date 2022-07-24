import styles from './cardContent.module.scss';

function CardContent({ body }) {
  return <p className={styles.postText}>{body}</p>;
}

export default CardContent;
