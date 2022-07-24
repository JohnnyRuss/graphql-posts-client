import decoder from 'jwt-decode';

export const authState = {
  user: null,
};

(function defender() {
  if (!localStorage.getItem('jwtToken')) return;

  const decodedToken = decoder(localStorage.getItem('jwtToken'));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
    authState.user = null;
  } else {
    authState.user = decodedToken;
  }
})();

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}

export default authReducer;
