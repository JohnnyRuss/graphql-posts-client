import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './cardActions.module.scss';
import { CommentBTN, LikeBTN, DeleteBTN } from '../Layouts';
import CardConfirmModal from './CardConfirmModal';

function CardActions({ user, post, handleReaction, handleComment, handleDelete }) {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  function deletePostHandler() {
    handleDelete();
    setOpenConfirmModal(false);
  }

  return (
    <div className={styles.actionsBox}>
      <LikeBTN
        handleReaction={handleReaction}
        likes={post.likes}
        likeCount={post.likeCount}
      />
      <Link to={`/posts/${post.id}`}>
        <CommentBTN
          postId={post.id}
          handleComment={handleComment}
          commentCount={post.commentCount}
        />
      </Link>
      {post.userName === user?.userName && (
        <DeleteBTN openConfirmDeleteWindow={() => setOpenConfirmModal(true)} />
      )}
      {openConfirmModal && (
        <CardConfirmModal
          closeConfirmDeleteWindow={() => setOpenConfirmModal(false)}
          deletePostHandler={deletePostHandler}
        />
      )}
    </div>
  );
}

export default CardActions;
