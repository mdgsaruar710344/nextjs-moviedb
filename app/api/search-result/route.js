const TMDB_API_KEY=process.env.TMDB_API_KEY

export async function GET(request) {
  const {searchParams} = new URL(request.url);
  const queryValue=searchParams.get('query');

  const bufferSearchResult=await fetch(`https://api.themoviedb.org/3/search/movie?query=${queryValue}&include_adult=false&language=en-US&page=1&api_key=${TMDB_API_KEY}`);

  const searchResult=await bufferSearchResult.json();
  
  return Response.json({searchResult});
  
}