import { findMovieByQuery } from "../actions";
import MovieCard from "./MovieCard";


const ShowSearchResult = async ({queryValue}) => {
  const searchReturn=await findMovieByQuery(queryValue);
  console.log(searchReturn);
  const resultsArray=searchReturn?.searchResult?.results;

  return (
    <div>
      This is search result Section!
      <br></br>
      Total Movie found for {queryValue && queryValue}: 
      {resultsArray.length>0? resultsArray.length :''};
      {resultsArray.length && resultsArray.map((movie,idx)=> <div key={idx}> <MovieCard movie={movie}></MovieCard> </div> )}
    </div>
  );
};

export default ShowSearchResult;