"use client"

import { usePathname, useRouter } from "next/navigation";

// import { findMovieByQuery } from "../actions";


const SearchComponent = () => {
 const router= useRouter();
 const pathname= usePathname();

  const handleSearchSubmit=async (e)=>{
    e.preventDefault();
   const searchValue= e.target.value;
   console.log(searchValue);
  //  const searchReturn=await findMovieByQuery(searchValue);
  //  console.log(searchReturn);
    if(searchValue){
       router.replace(`${pathname}?query=${searchValue}`);
    }
    else {
      router.replace(`${pathname}`);
    }
  }

  return (
    <div>
      <form onChange={handleSearchSubmit}>

          <input 
          type="text"
          placeholder="Search Movie"
          
          />
     </form>

    </div>
  );
};

export default SearchComponent;