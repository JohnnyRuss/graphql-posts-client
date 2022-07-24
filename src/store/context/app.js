import { createContext, useReducer } from 'react';
import { authReducer } from './';
import { authState } from './authReducer';

export const AppContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
});

const AppProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(authReducer, authState);

  function login(userData) {
    const key = Object.keys(userData)[0];
    dispatchUser({ type: 'LOGIN', payload: userData[key] });
    localStorage.setItem('jwtToken', userData[key].token);
  }

  function logout() {
    localStorage.removeItem('jwtToken');
    dispatchUser({ type: 'LOGOUT' });
  }

  return (
    <AppContext.Provider
      value={{
        user: userState.user,
        login,
        logout,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
