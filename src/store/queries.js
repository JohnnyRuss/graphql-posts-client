import gql from 'graphql-tag';

export const FETCH_POST_QUERY = gql`
  query {
    getPosts {
      id
      body
      createdAt
      userName
      likeCount
      likes {
        userName
      }
      commentCount
      comments {
        id
        userName
        body
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      userName
      likeCount
      likes {
        userName
      }
      commentCount
      comments {
        id
        userName
        body
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register(
    $userName: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        userName: $userName
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      token
      userName
      createdAt
    }
  }
`;

export const LOG_IN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      id
      email
      token
      userName
      createdAt
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      body
      createdAt
      id
      userName
      likeCount
      likes {
        createdAt
        id
        userName
      }
      commentCount
      comments {
        body
        id
        userName
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId) {
      id
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: String!) {
    likePost(postId: $postId) {
      body
      createdAt
      id
      userName
      likeCount
      likes {
        id
        userName
      }
      commentCount
      comments {
        body
        id
        userName
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        userName
      }
      commentCount
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($postId: String!, $commentId: String!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        userName
        body
      }
      commentCount
    }
  }
`;
