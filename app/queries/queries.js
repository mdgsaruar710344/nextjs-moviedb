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
