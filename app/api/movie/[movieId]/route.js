const TMDB_API_KEY=process.env.TMDB_API_KEY

export async function GET(request,{params}) {

const id=params?.movieId;

 const bufferSingleMovie=await  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${TMDB_API_KEY}`);
 const SingleMovieData= await bufferSingleMovie.json();
 
 return Response.json({SingleMovieData});

}