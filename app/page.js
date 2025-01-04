import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Toprated from "./components/Toprated";
import Trending from "./components/Trending";

export default function Home() {
  return (
   <div>
    
    <Header></Header>
    Home Page!
    <Hero></Hero>
    <Popular></Popular>
    <Toprated></Toprated>
    <Trending></Trending>
   </div>
  );
}
