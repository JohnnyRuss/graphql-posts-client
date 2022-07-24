import { usePostCRUD } from '../../hooks';
import { DELETE_COMMENT } from '../../store/queries';

import styles from './postCommentItem.module.scss';
import { DeleteBTN } from '../Layouts';

function PostCommentItem({ comment, postId, user }) {
  const { executor: executeDeleteComment } = usePostCRUD(DELETE_COMMENT, {
    postId: postId,
    commentId: comment?.id,
  });

  const handleDeleteComment = () => executeDeleteComment();

  return (
    <div className={styles.comment}>
      <h3 className={styles.userName}>{comment?.userName}</h3>
      <p className={styles.postText}>{comment?.body}</p>
      {user.userName === comment.userName && (
        <DeleteBTN
          className={styles.deleteCommentBtn}
          openConfirmDeleteWindow={handleDeleteComment}
        />
      )}
    </div>
  );
}

export default PostCommentItem;
