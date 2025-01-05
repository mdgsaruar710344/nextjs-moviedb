"use client"

import { useContext, useState } from "react";
import { handleWishList } from "../actions";
import { authContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const AddtoWishlist = ({movieId}) => {
    const {auth,setAuth} =useContext(authContext);
    const router= useRouter();
    const [wishlist,setWishlist]= useState(false);
    
    const id=auth?._id;

    const handleAddtoWishList=async()=>{
     if(!auth){
      setWishlist(false);
        router.push('/login');
       
     }
     else{
      const wishAdded=await handleWishList(id,movieId);
      console.log('wishAdded from client Side:',JSON.parse(wishAdded));
      setWishlist(true);
     }

    }
  return (
    <div>
   
      <button className="text-green-600 rounded " onClick={handleAddtoWishList}>Add to WishList</button>
      {wishlist&& <>Already added to wishList</>}
    </div>
  );
};

export default AddtoWishlist;