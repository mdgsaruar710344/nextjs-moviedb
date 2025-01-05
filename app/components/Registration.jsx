"use client"

import { handleRegistration } from "../actions";

const RegistrationComponent = () => {
  
  const handleRegistrationsubmit=async (e)=>{
        e.preventDefault();
        const formData=new FormData(e.currentTarget);

        const name=formData.get('name');
        const email=formData.get('email');
        const password=formData.get('password');
        const phone=formData.get('phone');

        console.log('email from new formdata',email);
        const createdUser= await handleRegistration(name,email,password,phone);
        const parsedCreatedUser=JSON.parse(createdUser);
       
        console.log('User created Successfully in client side. User:',parsedCreatedUser);
  }

  return (
    <div>
      <form onSubmit={handleRegistrationsubmit} >
        Name:
        <br></br>
        <input className="border-slate-600 bg-slate-400 m-2" type="text" name="name" required />
        <br></br>
        Email:
        <br></br>
        <input className="border-slate-600 bg-slate-400 m-2" type="email" name="email" required />
        <br></br>
        Password:
        <br></br>
        <input className="border-slate-600 bg-slate-400 m-2" type="password" name="password" required />
        <br></br>
        Phone:
        <br></br>
        <input className="border-slate-600 bg-slate-400 m-2" type="text" name="phone" required />
        <br></br>

        <button className="border-slate-600 bg-slate-400 rounded p-2 mt-4" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationComponent;