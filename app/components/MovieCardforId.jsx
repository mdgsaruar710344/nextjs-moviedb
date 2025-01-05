import Image from "next/image";
import Link from "next/link";
const TMDB_IMAGE_BASE_URL=process.env.TMDB_IMAGE_BASE_URL


const MovieCardforId =async ({movieId}) => {
const id=movieId;
  const bufferMovieDetails= await fetch(`http://localhost:3000/api/movie/${id}`);
  const DetailsData=await bufferMovieDetails.json();
  const movieData=DetailsData?.SingleMovieData;
  const {title,poster_path,release_date}=movieData ?? {}
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <Image
         src={`${TMDB_IMAGE_BASE_URL}${poster_path}`}
         alt="movie-card" 
         width={500}
         height={500}
      >
        </Image>
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title&&title}</h2>
      <p>Release Date: {release_date&&release_date}</p>
      <div className="card-actions justify-end">
        <Link href={`/movies/${id}`} className="btn btn-primary">See Details</Link>
      </div>
    </div>
  </div>
  );
};

export default MovieCardforId;