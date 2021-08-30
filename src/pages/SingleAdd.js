import React, { useEffect } from "react";
import { useState } from "react";
import { read } from "../actions/adds";

export default function SingleAdd({ match }) {
  const [image, setImage] = useState();
  const [position, setPosition] = useState();
  const [description, setDescription] = useState();
  const [salary, setSalary] = useState();
  const [website, setWebsite] = useState();
  const [name, setName] = useState();
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPostedAdds();
  }, []);

  const loadPostedAdds = async () => {
    let res = await read(match.params.addId);
    setName(res.data.name);
    setPosition(res.data.position);
    setDescription(res.data.about);
    setSalary(res.data.salary);
    setWebsite(res.data.website);

    console.log(res);
    setIsLoading(true);
    setImage(`${process.env.REACT_APP_API}/add/image/${res.data._id}`);
    setIsLoading(false);
  };

  return (
    <>
      <div>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 md:mt-16">
            <h1 className="text-3xl font-bold text-gray-600">
              Here's the advertisement
            </h1>
          </div>
        </header>
        <div className="flex justify-center">
          <div className="max-w-4xl rounded overflow-hidden shadow-lg my-2 bg-gray-700">
            <div className="p-5">
              <h1 className="font-bold text-2xl">{name}</h1>
              <h1 className="font-bold text-xl">{position}</h1>
            </div>

            {image ? (
              <img
                className="w-full animation: spin 1s linear infinite max-w-4xl"
                src={image}
                alt="Add_Image"
              />
            ) : (
              <>
                <div className="font-bold text-xl mb-2">About </div>
                <p className="text-grey-darker text-base">{description}</p>
              </>
            )}

            <div className="px-6 py-4">
              {image ? (
                <>
                  <div className="font-bold text-xl mb-2">About </div>
                  <p className="text-grey-darker text-base">{description}</p>
                </>
              ) : (
                ""
              )}

              <div className="flex flex-row mt-2">
                <div className="font-bold text-xl mb-2">Salary: </div>
                <p className="text-grey-darker text-xl ml-2">Rs.{salary}</p>
              </div>
              <div className="flex flex-row mt-2">
                <div className="font-bold text-xl mb-2">Website: </div>
                <p className="text-grey-darker text-xl ml-2 underline ">
                  <a href={`https://${website}`}>{website}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
