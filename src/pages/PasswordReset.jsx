// src/pages/PasswordReset.jsx
import { useState } from "react";
import { auth } from "../FierBase";
import { sendPasswordResetEmail } from "firebase/auth";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 my-10 md:grid-cols-3 md:gap-6">
      <div className="col-span-2 relative">
        <img
          src="/images/sign.jpeg"
          className="absolute top-0 -left-5 h-full object-cover object-center w-full"
        ></img>
      </div>
      <div className="flex flex-col gap-2 md:py-16">
        <h2 className="font-normal text-2xl md:text-3xl">Reset Password</h2>
        <p className="">Enter your details below</p>
        <form className="flex flex-col gap-3 mt-3 " onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 outline-none border-b border-solid border-slate-400 w-full md:max-w-[300px]"
          />
          <button
            type="submit"
            className="bg-secondary py-2 px-5 rounded max-w-[300px] text-white"
          >
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
