import styles from './home.module.scss';
import CardsList from './CardsList';

function Home({ data }) {
  return (
    <div className={styles.home}>
      <h2 className={styles.heading}>recent posts</h2>
      <CardsList data={data} />
    </div>
  );
}

export default Home;
