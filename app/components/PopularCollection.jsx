import MovieCard from "./MovieCard";

const PopularCollection =async () => {
  const bufferPopular=await fetch('http://localhost:3000/api/popular');
  const popularData=await bufferPopular.json();
  const popularArray=popularData?.data?.results;
  // console.log(popularArray);


  return (
    <div>
<h1 className="text-yellow-500 bold ">  This is Popular collection.</h1>  
    <div className="flex space-x-4 overflow-x-auto scroll-m-4">
      {popularArray.map(movie=> <div className="flex-shrink-0  " key={movie.id}> <MovieCard movie={movie}></MovieCard> </div> )}
      </div>
     
    </div>
  );
};

export default PopularCollection;