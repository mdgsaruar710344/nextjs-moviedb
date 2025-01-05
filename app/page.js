import Image from "next/image";
import Header from "./components/Header";

import SearchComponent from "./components/SearchComponent";
import ShowSearchResult from "./components/ShowSearchResult";
import DefaultHome from "./components/DefaultHome";
import { findMovieByQuery } from "./actions";

export default async function Home({searchParams}) {
   let term;
 const params= new URLSearchParams(searchParams);
 const queryValue=params.get('query');
//  console.log(queryValue);
   
    if(queryValue ){
        term=true;
    }
    else {
   term=false;
    }

  return (
   <div>
    
    <Header></Header>
    <SearchComponent></SearchComponent>
    Home Page!
    {term? <ShowSearchResult queryValue={queryValue}></ShowSearchResult> : <DefaultHome></DefaultHome>}
   
    
   </div>
  );
}
