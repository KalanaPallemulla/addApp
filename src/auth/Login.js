import React, { useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import { login } from "../actions/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function Login({ history }) {
  const [email, setEmail] = useState("k@k.com");
  const [password, setPassword] = useState("anrkkalana");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SEND LOGIN DATA ==>");

    try {
      let res = await login({
        email,
        password,
      });

      if (res.data) {
        console.log(
          "SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ====>"
        );
        // console.log(res.data);
        //Save user and token to local storage
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        //save user and token to redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });

        history.push("/");
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 md:mt-16">
          <h1 className="text-3xl font-bold text-gray-600">Login</h1>
        </div>
      </header>

      <LoginForm
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
}
