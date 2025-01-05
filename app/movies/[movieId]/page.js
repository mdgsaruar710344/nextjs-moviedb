import AddtoWishlist from "@/app/components/AddtoWishlist";
import Image from "next/image";
import Link from "next/link";

const TMDB_IMAGE_BASE_URL=process.env.TMDB_IMAGE_BASE_URL;
const MovieDetailsPage = async ({params}) => {
    const id=params?.movieId;
    const bufferMovieDetails= await fetch(`http://localhost:3000/api/movie/${id}`);
    const DetailsData=await bufferMovieDetails.json();
    const movieId=id;
    // console.log(DetailsData);
    const title=DetailsData?.SingleMovieData?.title;
    const photo=DetailsData?.SingleMovieData?.poster_path;
    const overview=DetailsData?.SingleMovieData?.overview;

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
      <AddtoWishlist movieId={movieId}></AddtoWishlist>
    </div>
  </div>
</div>
  );
};

export default MovieDetailsPage;