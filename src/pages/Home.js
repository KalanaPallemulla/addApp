import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { allAdds } from "../actions/adds";

const Home = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const { blogs } = useSelector((state) => state.adds);
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    dispatch(allAdds());
  }, []);

  // const loadAllAdds = async () => {
  //   let res = await allAdds();
  //   setAdds(res.data);
  // };

  return (
    <div>
      {/* <div>{JSON.stringify(adds, null, 4)}</div> */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 md:mt-16">
          <h1 className="text-3xl font-bold text-gray-600">Advertisements</h1>
        </div>
      </header>
      <div className="flex flex-wrap items-center justify-center">
        {blogs.map((a) => (
          <Card key={a._id} a={a} />
        ))}
        {/* {JSON.stringify(adds, null, 4)} */}
      </div>
    </div>
  );
};

export default Home;
