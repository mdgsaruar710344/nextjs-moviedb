import MovieCard from "./MovieCard";

const TrendingCollection =async () => {
  const bufferPopular=await fetch('http://localhost:3000/api/trending');
  const trendingData=await bufferPopular.json();
  const trendingArray=trendingData?.data?.results;
  console.log(trendingArray);


  return (
    <div>
      <h1 className="text-yellow-500 bold ">  This is Trending collection.</h1>
      <div className="flex space-x-4 overflow-x-auto scroll-m-4">
      {trendingArray.map(movie=> <div className="flex-shrink-0  " key={movie.id}> <MovieCard movie={movie}></MovieCard> </div> )}
      </div>
     
    </div>
  );
};

export default TrendingCollection;