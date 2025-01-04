const TMDB_API_KEY=process.env.TMDB_API_KEY


export async function GET(){
 const bufferdata=await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${TMDB_API_KEY}`);
 const data= await bufferdata.json();

 return Response.json({data});
}