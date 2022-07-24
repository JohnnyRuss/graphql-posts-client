import styles from './spinner.module.scss';
import { ImSpinner3 } from 'react-icons/im';

function Spinner() {
  return <ImSpinner3 className={styles.spinner} />;
}

export default Spinner;
