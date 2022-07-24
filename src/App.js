import { Route, Routes } from 'react-router-dom';
import { Home, LogIn, Register, RestrictAuth, Post } from './Pages';
import { Navigation } from './components';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<RestrictAuth />}>
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:postId' element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
