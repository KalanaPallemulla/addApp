import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-grey-lighter min-h-screen flex flex-col  shadow opacity-80">
        <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-8 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center font-semibold">Sign In</h1>

            <label
              class="block uppercase tracking-wide text-grey-darker font-medium text-xs  mb-2"
              for="grid-first-name"
            >
              Email
            </label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="jhondoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-medium mb-2"
              for="grid-first-name"
            >
              Password
            </label>
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={!email || !password}
              className="w-full text-center py-3 rounded bg-blue-500 mt-4 text-white hover:bg-blue-400 focus:outline-none my-1"
            >
              Lets Sign In
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing in, you agree to the{" "}
              <Link
                className="no-underline border-b border-gray-700 text-grey-dark"
                to="#"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                className="no-underline border-b border-gray-700 text-grey-dark"
                to="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="text-grey-dark mt-6 mb-6">
            Don't you have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/register"
            >
              {" "}
              Sign Up
            </Link>
            .
          </div>
        </div>
      </div>
    </form>
  );
}
