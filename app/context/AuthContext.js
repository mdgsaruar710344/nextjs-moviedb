"use client"
import { createContext, useState } from "react";

export const authContext= createContext();

export const AuthProvider=({children})=>{

const [auth,setAuth]=useState(null);

const authValue={auth,setAuth}
  return (
    <authContext.Provider value={authValue}>
        {children}
    </authContext.Provider>
  );
}