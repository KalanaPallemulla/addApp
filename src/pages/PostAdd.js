import React, { useState } from "react";
import { createAdd } from "../actions/adds";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function PostAdd() {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    province: "Western Province",
    city: "",
    zip: "",
    website: "",
    position: "",
    salary: "",
    about: "",
    header: "",
    image: "",
  });

 

  const [preview, setPreview] = useState(
    "http://via.placeholder.com/100x100.png?text=PREVIEW"
  );

  const {
    name,
    email,
    province,
    city,
    zip,
    website,
    position,
    salary,
    about,
    header,
    image,
  } = values;

  const handleImageChange = (e) => {
    // console.log(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let addData = new FormData();
    addData.append("name", name);
    addData.append("email", email);
    addData.append("province", province);
    addData.append("city", city);
    addData.append("zip", zip);
    addData.append("website", website);
    addData.append("position", position);
    addData.append("salary", salary);
    addData.append("about", about);
    addData.append("header", header);
    image && addData.append("image", image);

    console.log([...addData]);
    try {
      let res = await createAdd(token, addData);
      console.log("Add CREATE RESPONSE");
      toast.success("Add posted successfully ");
      setIsLoading(false);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  const hotelForm = () => (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6 p-8 md:mt-16">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0 ">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Post your advertiesment
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="col-md-2">
            <img
              src={preview}
              alt="previewImgae"
              className="img img-fluid m-2"
            />
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="name"
                        id="company_name"
                        className="w-full p-2 border-gray-300 border rounded"
                        placeholder="ABC PVT Ltd."
                        onChange={handleChange}
                        value={name}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company email
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="email"
                        id="company_email"
                        className="w-full p-2 border-gray-300 border rounded"
                        placeholder="abc@****.com"
                        onChange={handleChange}
                        value={email}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Province
                    </label>
                    <div class="relative" name="province">
                      <select
                        class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                        id="grid-state"
                        placeholder="Western Province"
                        defaultValue="Western Province"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            province: e.target.value,
                          })
                        }
                        value={province}
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
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="city"
                        id="company_city"
                        className="w-full p-2 border-gray-300 border rounded"
                        placeholder="Colombo"
                        onChange={handleChange}
                        value={city}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Zip
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="zip"
                        id="company_zip"
                        className="w-full p-2 border-gray-300 border rounded"
                        placeholder="200000"
                        onChange={handleChange}
                        value={zip}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Website
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      {/* <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        <select>
                          <option>https://</option>
                          <option>http://</option>
                        </select>
                      </span> */}
                      <input
                        type="text"
                        name="website"
                        id="company_website"
                        className="w-full p-2 border-gray-300 border rounded"
                        placeholder="www.example.com"
                        onChange={handleChange}
                        value={website}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job/Vacancy Position
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="position"
                        id="company_website"
                        className="w-full p-2 border-gray-300 border rounded"
                        placeholder="Accountant/Software Engineer"
                        onChange={handleChange}
                        value={position}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Salary
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="salary"
                        id="company_website"
                        className="w-full p-2 border-gray-300 border rounded"
                        placeholder="100,000"
                        onChange={handleChange}
                        value={salary}
                      />
                    </div>
                    <label className="mt-2 text-sm text-gray-500">
                      It shows with "Rs." Enter salary
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    About Vacancy
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      className="w-full p-2 border-gray-300 border rounded"
                      placeholder="you@example.com"
                      onChange={handleChange}
                      value={about}
                    ></textarea>
                  </div>
                  <p className="text-sm text-gray-500">
                    Description for Vacancy. URLs are hyperlinked.
                  </p>
                </div>

                <div>
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Briefly About Vacancy
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      className="w-full p-2 border-gray-300 border rounded"
                      placeholder="you@example.com"
                      onChange={handleChange}
                      value={about}
                    ></textarea>
                  </div>
                  <p className="text-sm text-gray-500">
                    Description for Vacancy. URLs are hyperlinked.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Header 1
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="header"
                        id="company_website"
                        className="w-full p-2 border-gray-300 border rounded"
                        placeholder="Intern"
                        onChange={handleChange}
                        value={header}
                      />
                    </div>
                    <label className="mt-2 text-sm text-gray-500">
                      That will highlight the your header with hash tag
                    </label>
                  </div>
                </div>
                {/* <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Header 2
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="header2"
                        id="company_website"
                        className="w-full p-2 border-gray-300 border rounded"
                        placeholder="Intern"
                        onChange={handleChange}
                        value={header2}
                      />
                    </div>
                    <label className="mt-2 text-sm text-gray-500">
                      That will highlight the your header with hash tag
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Header 3
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="header3"
                        id="company_website"
                        className="w-full p-2 border-gray-300 border rounded"
                        placeholder="Intern"
                        onChange={handleChange}
                        value={header3}
                      />
                    </div>
                    <label className="mt-2 text-sm text-gray-500">
                      That will highlight the your header with hash tag
                    </label>
                  </div>
                </div> */}
                {/* <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <div class="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                        >
                          <select?
                          <option>hi</option>
                          <option>hello</option>
                          <svg
                            class="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path */}
                {/* fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <label className="mt-2  text-sm text-gray-500">
                      That will highlight the your header with hash tag
                    </label>
                  </div>
                </div> */}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover photo
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                {isLoading ? (
                  "saving"
                ) : (
                  <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return <div> {hotelForm()}</div>;
}
