import Image from "next/image";
import Link from "next/link";

const TMDB_IMAGE_BASE_URL=process.env.TMDB_IMAGE_BASE_URL

const Hero =async () => {
const herobuffer=await fetch('http://localhost:3000/api/now-playing');
const herodata=await herobuffer.json();
const results=herodata?.data?.results;
const heroSingleMovie=results?.[0];
const title=heroSingleMovie?.original_title;
const overview=heroSingleMovie?.overview.slice(0,100);
const photo=heroSingleMovie?.poster_path;
const id=heroSingleMovie?.id;

  return (

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
        <Image 
        alt="now-playing movie"
        src={`${TMDB_IMAGE_BASE_URL}${photo}`}
        width={500}
        height={500}
        className="max-w-sm rounded-lg shadow-2xl"
        >
        </Image>
    <div>
      <h1 className="text-5xl font-bold">{title&& title}</h1>
      <p className="py-6">
    {overview && overview}
      </p>
      <Link href={`/movies/${id}`} className="btn btn-primary">See Details</Link >
    </div>
  </div>
</div>
  );
};

export default Hero;