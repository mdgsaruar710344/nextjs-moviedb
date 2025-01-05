"use client"

import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Link from "next/link";


const UserState = () => {
  const {auth,setAuth}=useContext(authContext);
  const handleLogOut=()=>{
    setAuth(null);
  }
  return (
    <div>
      {auth && auth.email}
      {auth&& <> <button onClick={handleLogOut}>LogOut</button> </>}
      {!auth&& <> <Link href={'/login'}>Login</Link> </>}
      {auth&& <> <Link href={`/wishlist?userId=${auth._id}`}>WishList</Link></>}
    </div>
  );
};

export default UserState;