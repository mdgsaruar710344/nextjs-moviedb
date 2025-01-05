'use server'

export async function findMovieByQuery(query) {
  const bufferSearchResult=await fetch(`http://localhost:3000/api/search-result?query=${query}`);
  const searchResult= await bufferSearchResult.json();
  return searchResult;
}