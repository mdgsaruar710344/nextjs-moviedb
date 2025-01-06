"use client"

import { useState } from "react";
import SingleContainer from "./SingleContainer";


const Compare = ({children}) => {
 
   const [container,setContainer]= useState([]);
   const [index,setIndex]=useState(0);
   const handleAddNewMovie=()=>{
  
    const newindex=index+1;
     setIndex(newindex);
     const newarray=[...container,newindex];
     setContainer(newarray);
  }
  return (
    <div>
      {container&& container.length};
      <br></br>
      <button onClick={handleAddNewMovie}>Add New Movie</button>
      {container.length>0 && container.map((singlecontainer,idx)=><SingleContainer key={singlecontainer} container={container} setContainer={setContainer} singlecontainer={singlecontainer}>
       {children}
      </SingleContainer>)}
    </div>
  );
};

export default Compare;