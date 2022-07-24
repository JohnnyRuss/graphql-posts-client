import styles from './cardList.module.scss';
import Card from './Card';
import CreatePostCard from './CreatePostCard';

function CardsList({ data }) {
  return (
    <div className={styles.cardList}>
      <CreatePostCard />
      {data?.map((post) => (
        <Card post={post} key={post.id} />
      ))}
    </div>
  );
}

export default CardsList;
