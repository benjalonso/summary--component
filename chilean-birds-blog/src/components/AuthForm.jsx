import React from "react";
import { useState } from "react";

const AuthForm = () => {
  const [modal, setModal] = useState("block");
  return (
    <>
      <section
        className={` fixed top-0 bottom-0 left-0 right-0 z-10 hidden md:max-3xl:${modal}`}
      >
        <div className="bg-green-100 dark:bg-slate-200 z-20 absolute  w-screen h-screen  opacity-25 "></div>
        <div className="w-[250px] md:h-[320px] lg:max-3xl:h-[380px] dark:bg-slate-900 bg-green-50 border dark:border-slate-200 border-green-600 absolute z-50 top-[25vh] left-[41vw] rounded-md">
          <input
            type="email"
            placeholder="Email"
            className="bg-green-50 border-b-[1px] h-10 mx-auto grid place-content-center mt-10 border-stone-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-green-50 border-b-[1px] h-10 mx-auto grid place-content-center mt-5 border-stone-700"
          />
          <button
            className="w-3/5 h-10 bg-green-500 mx-auto grid place-content-center text-green-50 mt-10"
            type="submit"
          >
            Log in
          </button>
          <button className="w-3/5 h-10 bg-green-500 mx-auto grid place-content-center text-green-50 mt-5">
            Sign up
          </button>
        </div>
      </section>
    </>
  );
};

export default AuthForm;
