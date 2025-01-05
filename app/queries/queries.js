import { usersModel } from "../models";

export async function createUser(name,email,password,phone) {
  try {
    const createdUser= await usersModel.create({
      name,
      email,
      password,
      phone,
     });
     console.log('User Created Successfully',createdUser);
     return createdUser;
  } catch (error) {
    console.error(error)
  }

}
export async function findUserbyEmail(email,password) {
  try {
    const foundUser= await usersModel.findOne({
      email:email,
      password:password
    })
    console.log(`User for ${email} :`,foundUser);
    return JSON.stringify(foundUser);
  } catch (error) {
    console.error(error);
  }
}


export async function addToWishList(id,movieId) {
  const userFound= await findUserById(id);
  const alredayAdded= userFound?.wishlist?.includes(movieId);
  if(alredayAdded){
    console.log('Already added to wishlist');
    return null;
  
  }
  try {
    const wishAdded=await usersModel.findByIdAndUpdate(id,{
      $push:{wishlist:movieId}
    })
      console.log('wishAdded User:',wishAdded);
    return wishAdded;
  } catch (error) {
    console.error(error);
  }
}

export async function findUserById(id) {
  try {
    const userFound=await usersModel.findById(id).lean();
    return userFound;
  } catch (error) {
    console.error(error)
  }
}
