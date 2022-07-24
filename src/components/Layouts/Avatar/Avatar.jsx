import styles from './avatar.module.scss';

function Avatar({className}) {
  return <figure className={`${styles.avatar} ${className}`}>&nbsp;</figure>;
}

export default Avatar;
