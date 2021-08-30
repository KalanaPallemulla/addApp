import React from "react";
import { Link } from "react-router-dom";

export default function RegisterForm({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  setPasswordC,
  passwordC,
  isLoading,
  setIsLoading,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-grey-lighter min-h-screen flex flex-col shadow opacity-80">
        <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2 my-10 ">
          <div className="bg-white px-8 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center font-semibold">Sign up</h1>
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-medium mb-2"
              for="grid-first-name"
            >
              Name
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="ABC (pvt) Ltd."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-medium mb-2"
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
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-medium mb-2"
              for="grid-first-name"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              id="confirmPassword"
              value={passwordC}
              onChange={(e) => setPasswordC(e.target.value)}
            />
            {/*<label
              class="block uppercase tracking-wide text-grey-darker text-xs font-medium mb-2"
              for="grid-city"
            >
              City
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-medium mb-2 mt-4"
              for="grid-state"
            >
              Province
            </label>
            <div
              class="relative"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <select
                class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="grid-state"
                placeholder="Western Province"
                defaultValue="Western Province"
              >
                <option>Western Province</option>
                <option>Eastern Province</option>
                <option>Northern Province </option>
                <option>Southern Province </option>
                <option>Central Province </option>
                <option>North Western Province </option>
                <option>North Central Province </option>
                <option>Uva Province </option>
                <option>Sabaragamuwa Province</option>
              </select>

              <p class="text-grey-dark text-xs italic mt-1 mx-1.5">
                Western Provice is selected as default
              </p>
            </div>

            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-medium mb-2 mt-4"
              for="grid-zip"
            >
              Zip
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-zip"
              type="text"
              placeholder="90210"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            /> */}
            {isLoading ? (
              <button
                disabled={true}
                className="w-full text-center py-3 rounded bg-blue-500 mt-4 text-white hover:bg-blue-400 focus:outline-none my-1"
              >
                Creating...
              </button>
            ) : (
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-500 mt-4 text-white hover:bg-blue-400 focus:outline-none my-1"
              >
                Create Account
              </button>
            )}

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the{" "}
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
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/login"
            >
              {" "}
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </form>
  );
}
