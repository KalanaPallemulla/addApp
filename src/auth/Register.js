import React, { useState } from "react";
import RegisterForm from "../components/forms/RegisterForm";
import { toast } from "react-toastify";
import axios from "axios";
import { register } from "../actions/auth";

export default function Register({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await register({
        name,
        email,
        password,
        passwordC,
      });
      console.log("Register User: ", res);
      toast.success("Register Success.. Please Login");
      setIsLoading(false);
      history.push("/login");
    } catch (err) {
      console.log("Register Error: ", err);
      if (err.response.status === 400) toast.error(err.response.data);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 md:mt-16 ">
          <h1 className="text-3xl font-bold text-gray-600">Register</h1>
        </div>
      </header>

      <RegisterForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        passwordC={passwordC}
        setPasswordC={setPasswordC}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}
