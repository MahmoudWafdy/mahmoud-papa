import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="grid grid-cols-1 py-12 gap-4 sm-md:grid-cols-2  md:py-24 md:gap-12">
      <img src="../src/img/sign.jpeg" className=" "></img>
      <div className="flex flex-col gap-3 md:pl-16">
        <h2 className="font-normal text-2xl md:text-3xl">
          Log in to Exclusive
        </h2>
        <p className="">Enter your details below</p>
        <form className="flex flex-col gap-3 mt-3 ">
          <input
            type="text"
            placeholder="Email or Phone number"
            className="py-3 outline-none border-b border-solid border-slate-400 max-w-[300px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-3 outline-none border-b border-solid border-slate-400 max-w-[300px]"
          ></input>
        </form>
        <div className="flex gap-3 justify-between items-center max-w-[300px] mt-6">
          <button className="bg-secondary py-2 px-6 rounded max-w-[300px] text-white">
            Log In
          </button>
          <Link to={""}>Forget Password ?</Link>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
