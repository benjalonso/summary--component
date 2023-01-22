import React from "react";
import { useState, useContext } from "react";
import { ContentContext } from "./App";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.js";

const AuthForm = () => {
  const { email, setEmail, password, setPassword, authModal, setAuthModal } =
    useContext(
      ContentContext,
      (prevState, nextState) => prevState.content !== nextState.content
    );

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const auth = getAuth(app);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email !== "" && password !== "") {
        console.log(email);
        console.log(password);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userCredential);
      }
      setAuthModal("hidden");
      console.log(authModal);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      if (error.code === "auth/email-already-in-use")
        alert("Email already in use");
      else if (error.code === "auth/invalid-email") alert("Invalid email");
      else if (error.code === "auth/weak-password") alert("Invalid password");
      else if (error.code) alert("something went wrong");
    }
  };

  return (
    <>
      <div className={`fixed top-0 bottom-0 left-0 right-0 z-10  ${authModal}`}>
        <div className="bg-green-100 dark:bg-slate-200 z-20 absolute  w-screen h-screen  opacity-25 "></div>
        <form className="w-[250px] md:h-[320px] lg:max-3xl:h-[380px] dark:bg-slate-900 bg-green-50 border dark:border-slate-200 border-green-600 absolute z-50 top-[25vh] left-[41vw] rounded-md">
          <input
            value={email}
            type="email"
            onChange={handleEmail}
            placeholder="Email"
            className="bg-green-50 border-b-[1px] h-10 mx-auto grid place-content-center mt-10 border-stone-700"
          />
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            // onKeyDown={handlePassword}
            placeholder="Password"
            className="bg-green-50 border-b-[1px] h-10 mx-auto grid place-content-center mt-5 border-stone-700"
          />
          <button
            className="w-3/5 h-10 bg-green-500 mx-auto grid place-content-center text-green-50 mt-10"
            type="submit"
          >
            Log in
          </button>
          <button
            type="submit"
            className="w-3/5 h-10 bg-green-500 mx-auto grid place-content-center text-green-50 mt-5"
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
