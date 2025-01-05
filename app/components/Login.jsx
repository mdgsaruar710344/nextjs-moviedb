"use client"
import { useContext } from "react";
import { handleLogin } from "../actions";
import { authContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const {auth,setAuth}= useContext(authContext);
 const router= useRouter();

  const handleLoginSubmit=async (e)=>{
    e.preventDefault();

    const formData=new FormData(e.currentTarget);

    const email=formData.get('email');
    const password=formData.get('password');

    console.log('email from new formdata',email);

    const foundUser=await handleLogin(email,password);
    if(foundUser){
     
      const parsedFoundUser=JSON.parse(foundUser);
        setAuth(parsedFoundUser);
        console.log(parsedFoundUser);
        router.push('/');

    }
    else{
      console.log('User not found in client')
    }
   
  }
  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
      Email:
        <br></br>
        <input className="border-slate-600 bg-slate-400 m-2" type="email" name="email" required />
        <br></br>
        Password:
        <br></br>
        <input className="border-slate-600 bg-slate-400 m-2" type="password" name="password" required />
        <br></br>

        <button className="border-slate-600 bg-slate-400 rounded p-2 mt-4" type="submit">Submit</button>

      </form>

      <div>{auth && auth.name}</div>
      <div>{auth && auth.email}</div>
    </div>
  );
};

export default Login;