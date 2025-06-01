import type { NextPage } from 'next';
import Counter from '../components/Counter';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Counter />
    </div>
  );
};

export default Home;
