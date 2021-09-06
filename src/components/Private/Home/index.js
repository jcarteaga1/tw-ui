import { Link } from "react-router-dom";
import Metadata from "../../Metadata";
const Home = () => {
  return (
    <>
      <Metadata
        title="Home Page"
        content={"Placen where you can find your information about twitter"}
      />
      <div>Hola Home </div>
      <Link to="profile">Profile</Link>
      <Link to="timeline/1">Timeline</Link>
      <Link to="tweets/1">Tweets</Link>
      <Link to="trending/1">Trending</Link>
      <Link to="search/results">Search Results</Link>
    </>
  );
};

export default Home;
