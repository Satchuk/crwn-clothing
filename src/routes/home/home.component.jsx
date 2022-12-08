import { categories } from '../../categories';
import { Directory } from '../../Components/directory/directory.component';

const Home = () => {

  return (
      <Directory categories={categories}  />
  );
}

export default Home;
