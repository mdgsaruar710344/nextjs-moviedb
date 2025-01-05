'use server'



import { createUser, findUserbyEmail } from "../queries/queries";

export async function findMovieByQuery(query) {
  const bufferSearchResult=await fetch(`http://localhost:3000/api/search-result?query=${query}`);
  const searchResult= await bufferSearchResult.json();
  return searchResult;
}

export async function handleRegistration(name,email,password,phone) {



   console.log('formdata in actions',name,email,password,phone);

   const createdUser=await createUser(name,email,password,phone);
   if(createdUser){
    const plainUserObject= createdUser.toObject();
    console.log('User created in action successfully. User is:',plainUserObject);
   
    return JSON.stringify(plainUserObject);
   }
}

export async function handleLogin(email,password){
const foundUser= await findUserbyEmail(email,password);
console.log('found User in actions',foundUser);
return foundUser;
}