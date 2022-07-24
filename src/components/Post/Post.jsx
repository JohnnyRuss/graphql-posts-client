import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { AppContext } from '../../store/context/app';
import { usePostCRUD } from '../../hooks';
import { GET_SINGLE_POST, LIKE_POST, DELETE_POST, CREATE_COMMENT } from '../../store/queries';

import styles from './post.module.scss';
import PostContent from './PostContent';
import PostForm from './PostForm';
import PostCommentsList from './PostCommentsList';

function Post() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { user } = useContext(AppContext);

  const { data } = useQuery(GET_SINGLE_POST, {
    variables: {
      postId,
    },
  });

  const { executor: executeLikePost } = usePostCRUD(LIKE_POST, {
    postId: postId,
  });

  const { executor: executeDeletePost } = usePostCRUD(
    DELETE_POST,
    {
      postId: postId,
    },
    'DELETE_POST'
  );

  const {
    onChangeHandler: textAreaChange,
    form: textForm,
    executor: executeCreateComment,
  } = usePostCRUD(CREATE_COMMENT, {
    postId: postId,
    body: '',
  });

  function handleDeletePost() {
    executeDeletePost();
    navigate('/');
  }

  const handleLikePost = () => executeLikePost();

  function handleAddComment(e) {
    e.preventDefault();
    executeCreateComment();
  }

  return (
    <div className={styles.post}>
      <PostContent
        data={data?.getPost}
        handleLikePost={handleLikePost}
        handleDeletePost={handleDeletePost}
        user={user}
      />
      <PostForm
        handleAddComment={handleAddComment}
        textAreaChange={textAreaChange}
        textForm={textForm}
      />
      <PostCommentsList data={data?.getPost} postId={postId} user={user} />
    </div>
  );
}

export default Post;
