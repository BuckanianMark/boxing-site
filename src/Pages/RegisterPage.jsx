import { Link } from "react-router-dom"


const RegisterPage = () => {
  return (
    <div className="flex items-start mt-[80px]  justify-center h-[100%]">
    <div className="bg-[#e6fcfc] ">
    <h1 className="text-center text-xl text-gray-800 mt-4">New User,Create An Account</h1>
    <form className="pt-10 pb-20  px-16">
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="font-bold text-gray-600">Username</label>
        <input 
        type="text" 
        name="username" 
        className="py-1 px-3 rounded-md border-b-2 border-transparent outline-none focus:border-b-2 focus:border-emerald-500"
         placeholder="Enter a username.." />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="font-bold text-gray-600">Email</label>
        <input 
        type="text" 
        name="username" 
        className="py-1 px-3 rounded-md border-b-2 border-transparent outline-none focus:border-b-2 focus:border-emerald-500"
         placeholder="Enter preffered email." />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="font-bold text-gray-600">Password</label>
        <input 
        type="text" 
        name="username" 
        className="py-1 px-3 rounded-md border-b-2 border-transparent outline-none focus:border-b-2 focus:border-emerald-500"
         placeholder="Enter a password.." />
      </div>
      <button className="w-full bg-emerald-400 mt-5 py-1 rounded-md font-bold text-gray-800 hover:opacity-90 duration-150">Register</button>
      <span className="text-gray-800">Already Have An Account <Link to={"/login"} className="border-b-2 border-teal-800 text-teal-800">login</Link></span>
    </form>
  
    </div>
  </div>
  )
}

export default RegisterPage