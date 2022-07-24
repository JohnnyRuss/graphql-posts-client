import { createRoot } from 'react-dom/client';
import './styles/index.scss';

import Apollo from './store/ApolloProvider';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './store/context/app';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Apollo>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </Apollo>
);
