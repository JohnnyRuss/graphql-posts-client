import styles from './postContent.module.scss';
import { Avatar, LikeBTN, CommentBTN, DeleteBTN } from '../Layouts';

function PostContent({ user, data, handleLikePost, handleDeletePost }) {
  return (
    <>
      <Avatar className={styles.userFigure} />
      <div className={styles.postBox}>
        <h3 className={styles.userName}>{data?.userName}</h3>
        <span className={styles.timeAgo}>{data?.createadAt}</span>
        <p className={styles.postText}>{data?.body}</p>
        <div className={styles.actionsBox}>
          <LikeBTN
            handleReaction={handleLikePost}
            likeCount={data?.likeCount}
            likes={data?.likes}
          />
          <CommentBTN commentCount={data?.commentCount} />
          {user?.userName === data?.userName && (
            <DeleteBTN openConfirmDeleteWindow={handleDeletePost} />
          )}
        </div>
      </div>
    </>
  );
}

export default PostContent;
