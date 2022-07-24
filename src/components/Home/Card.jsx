import { useContext } from 'react';

import { AppContext } from '../../store/context/app';
import { usePostCRUD } from '../../hooks';
import { LIKE_POST, DELETE_POST } from '../../store/queries';

import styles from './card.module.scss';
import CardHead from './CardHead';
import CardContent from './CardContent';
import CardActions from './CardActions';

function Card({ post }) {
  const { user } = useContext(AppContext);
  const { executor: executeReaction } = usePostCRUD(LIKE_POST, { postId: post.id });
  const { executor: executeDeletePost } = usePostCRUD(
    DELETE_POST,
    { postId: post.id },
    'DELETE_POST'
  );

  const handleReaction = () => executeReaction();

  const handleComment = () => {};

  const handleDelete = () => executeDeletePost();

  return (
    <div className={styles.card}>
      <CardHead userName={post.userName} createdAt={post.createdAt} />
      <CardContent body={post.body} />
      <CardActions
        user={user}
        post={post}
        handleReaction={handleReaction}
        handleComment={handleComment}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Card;
