import styles from './auth.module.scss';

function InputField({ type, defaultValue, label, id, handler }) {
  return (
    <div className={styles.inputField}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        value={defaultValue}
        id={id}
        className={styles.input}
        name={id}
        onChange={handler}
      />
    </div>
  );
}

export default InputField;
