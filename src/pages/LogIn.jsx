import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="grid grid-cols-1 my-10 md:grid-cols-3 md:gap-6">
      <div className="col-span-2 relative">
        <img
          src="/images/sign.jpeg"
          className="absolute top-0 -left-5 h-full object-cover object-center w-full"
        ></img>
      </div>
      <div className="flex flex-col gap-2 md:py-16">
        <h2 className="font-normal text-2xl md:text-3xl">
          Log in to Exclusive
        </h2>
        <p className="">Enter your details below</p>
        <form className="flex flex-col gap-3 mt-3 ">
          <input
            type="text"
            placeholder="Email or Phone number"
            className="py-3 outline-none border-b border-solid border-slate-400 w-full md:max-w-[300px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-3 outline-none border-b border-solid border-slate-400 w-full md:max-w-[300px]"
          ></input>
        </form>
        <div className="flex gap-3 justify-between items-center max-w-[300px] mt-6">
          <button className="bg-secondary py-2 px-5 rounded max-w-[300px] text-white">
            Log In
          </button>
          <Link to={""}>Forget Password ?</Link>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
