"use client"

import { usePathname, useRouter } from "next/navigation";
import  { useState } from "react";
import { findMovieByQuery, handlefindMovieById } from "../actions";
import MiniMoviecard from "./MiniMovieCard";
import Image from "next/image";

const Modal = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search,setSearch]=useState([]);
  const [preModal,setPreModal]=useState(false);
  const [PreModalDetails,setPreModalDetails]=useState(false);

  const router=useRouter();
  const pathname=usePathname();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
 
  if(preModal){
    const handlePreModal=async()=>{
const DetailsData=await handlefindMovieById(preModal);
console.log('DetailsData:',DetailsData);
setPreModalDetails(DetailsData);
setPreModal(false);
    }
handlePreModal();
  }
  const handleSearchInput=async(e)=>{
     e.preventDefault();
     const term=e.target.value;
     console.log(term);
     if(term){
      const searchResult=await findMovieByQuery(term);
     
      const resultsArray= searchResult?.searchResult?.results;
      console.log(resultsArray);
      setSearch(resultsArray);
     }
     
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div>
        {PreModalDetails?.SingleMovieData?.title&& PreModalDetails.SingleMovieData.title}
        {PreModalDetails?.SingleMovieData?.title&& <div>
               <Image
                     src={`https://image.tmdb.org/t/p/w200${PreModalDetails.SingleMovieData.poster_path}`}
                     alt="movie-card" 
                     width={200}
                     height={200}
                  >
                    </Image> 
          </div>}
     
      </div>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal on overlay click
        >
          <div
            className="bg-white w-[500px] h-[500px] rounded-lg shadow-lg relative p-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white bg-red-500 rounded-full hover:bg-red-600"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h1 className="text-2xl font-bold mb-4 text-center">Beautiful Modal</h1>
         
              This is a clean and elegant modal design created with Tailwind CSS.
              <form onChange={handleSearchInput}>
                <input type="text" name="term" required/>

              </form>
              {children}
              <div className="flex  space-y-4 overflow-y-auto scroll-m-4">
              {search?.length>0 && search.map((movie,idx)=> <div key={idx}><MiniMoviecard preModal={preModal} setPreModal={setPreModal} setIsOpen={setIsOpen} movie={movie}></MiniMoviecard></div>)}

              </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
