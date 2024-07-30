// import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase";
import { useUser } from "../components/UserContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { user } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert(`Welcome, ${user.displayName} ,Shop Now `);
      navigate("/"); // Navigate to home page after successful login
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };
  return (
    <div className="grid grid-cols-1 my-10 md:grid-cols-3 md:gap-6 ">
      <div className="col-span-2 relative">
        <img
          src="/images/sign.jpeg"
          className="absolute top-0 -left-5 lg:-left-28 h-full object-cover object-center w-full"
        ></img>
      </div>
      <div className="flex flex-col gap-2 md:py-16 md:min-h-[510px]">
        <h2 className="font-normal text-2xl md:text-3xl">
          Log in to Exclusive
        </h2>
        <p className="">Enter your details below</p>
        <form className="flex flex-col gap-3 mt-3 ">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or Phone number"
            className="py-3 outline-none border-b border-solid border-slate-400 w-full md:max-w-[300px]"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="py-3 outline-none border-b border-solid border-slate-400 w-full md:max-w-[300px]"
          ></input>
        </form>
        <div className="flex gap-3 justify-between items-center max-w-[300px] mt-6">
          <button
            className="bg-secondary py-2 px-5 rounded max-w-[300px] text-white"
            onClick={handleSubmit}
          >
            Log In
          </button>
          <button onClick={() => navigate("/reset-password")}>
            Forgot Password?
          </button>
        </div>
      </div>{" "}
      {error && <p>{error}</p>}
    </div>
  );
};
export default LogIn;
