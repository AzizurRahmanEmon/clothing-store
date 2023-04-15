import { categories } from "../../data/data";
import Directory from "../../directory/directory.component";
const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
