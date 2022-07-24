import styles from './postCommentsList.module.scss';
import PostCommentItem from './PostCommentItem';

function PostCommentsList({ data, postId, user }) {
  return (
    <div className={styles.commentsBox}>
      {data?.comments?.map((comment) => (
        <PostCommentItem comment={comment} key={comment.id} postId={postId} user={user} />
      ))}
    </div>
  );
}

export default PostCommentsList;
