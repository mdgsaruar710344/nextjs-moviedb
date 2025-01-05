import Hero from "./Hero";
import Popular from "./Popular";
import Toprated from "./Toprated";
import Trending from "./Trending";


const DefaultHome = () => {
  return (
    <div>
        <Hero></Hero>
        <Popular></Popular>
        <Toprated></Toprated>
        <Trending></Trending>
    </div>
  );
};

export default DefaultHome;