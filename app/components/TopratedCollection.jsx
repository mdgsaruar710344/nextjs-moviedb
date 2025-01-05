import MovieCard from "./MovieCard";

const TopRatedCollection =async () => {
  const bufferPopular=await fetch('http://localhost:3000/api/top-rated');
  const topratedData=await bufferPopular.json();
  const topratedArray=topratedData?.data?.results;
  // console.log(topratedArray);


  return (
    <div>
    <h1 className="text-yellow-500 bold ">  This is Toprated collection.</h1>
      <div className="flex space-x-4 overflow-x-auto scroll-m-4">
      {topratedArray.map(movie=> <div className="flex-shrink-0  " key={movie.id}> <MovieCard movie={movie}></MovieCard> </div> )}
      </div>
     
    </div>
  );
};

export default TopRatedCollection;