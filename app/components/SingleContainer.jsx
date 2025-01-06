
"use client"

import Modal from "./Modal";

const SingleContainer = ({children,setContainer,singlecontainer,container}) => {
const handleRemoveMovie=()=>{
const updatedArray= container.filter(item=>item!==singlecontainer);
setContainer(updatedArray);
}
console.log('id no:',singlecontainer);
  return (
    <div className="border-red-500 border-2">
      This is single container!
<br></br>
<Modal>{children}</Modal>
{children}
      <br></br>
      <button onClick={handleRemoveMovie}>Close</button>
    </div>
  );
};

export default SingleContainer;