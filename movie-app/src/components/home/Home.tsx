import Hero from '../hero/Hero';
import { Props } from '../interfaces/Movie';

const Home: React.FC<Props> = ({ movies }) => {
    return <Hero movies={movies} />;
};

export default Home;
