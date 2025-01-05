import { redirect } from "next/navigation";
import { handlefindUserbyId } from "../actions";
import MovieCard from "../components/MovieCard";
import MovieCardforId from "../components/MovieCardforId";

const page = async ({searchParams}) => {
  const id=searchParams?.userId;
  console.log(id);
  if(!id){
  redirect('/login');
  
  }

 const userFound= await handlefindUserbyId(id);
const wishlistArray=userFound?.wishlist;
 
  return (
    <div>
      This is wishlist
      <div>
        {wishlistArray.length>0 && wishlistArray.map((movieId,idx)=> <div key={idx}> <MovieCardforId movieId={movieId}></MovieCardforId> </div> )}
      </div>
    </div>
  );
};

export default page;