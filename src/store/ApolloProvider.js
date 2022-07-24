import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://damp-eyrie-72243.herokuapp.com/',
});

const authorizationHeader = setContext((request, previousContext) => {
  const JWT_TOKEN = localStorage.getItem('jwtToken');

  return {
    headers: {
      Authorization: JWT_TOKEN ? `Bearer ${JWT_TOKEN}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authorizationHeader.concat(httpLink),
  cache: new InMemoryCache(),
});

function Apollo({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Apollo;
