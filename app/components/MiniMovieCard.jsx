import Image from "next/image";

const TMDB_IMAGE_BASE_URL=process.env.TMDB_IMAGE_BASE_URL


const MiniMoviecard = ({preModal,setPreModal,setIsOpen,movie}) => {
  const {title,poster_path,id,release_date}=movie ?? {};
  const handleModalClosure=()=>{
setPreModal(id);
setIsOpen(false);
  }
  return (
    <div className="card card-compact  h- bg-base-100 w-40 shadow-xl">
    <figure>
      {/* <Image
         src={`${TMDB_IMAGE_BASE_URL}${poster_path}`}
         alt="movie-card" 
         width={20}
         height={20}
      >
        </Image> */} 
    </figure>
    <div onClick={handleModalClosure} className="card-body border-red-700 border-2">
      <h2  className="card-title">{title&&title}</h2>
      {/* <p>Release Date: {release_date&&release_date}</p> */}
    
    </div>
  </div>
  );
};

export default MiniMoviecard;