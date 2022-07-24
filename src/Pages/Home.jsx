import { useQuery } from '@apollo/react-hooks';
import { FETCH_POST_QUERY } from '../store/queries';

import { Home as HomePage } from '../components';

function Home() {
  const { data } = useQuery(FETCH_POST_QUERY);

  return <HomePage data={data?.getPosts} />;
}

export default Home;
