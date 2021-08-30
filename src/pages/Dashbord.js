import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { postedHotels, deleteAdd } from "../actions/adds";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    loadPostedAdds();
  }, []);

  const loadPostedAdds = async () => {
    let { data } = await postedHotels(auth.token);
    setAdds(data);
  };

  const handleAddDelete = async (addId) => {
    if (!window.confirm("Are you sure..?")) return;
    deleteAdd(auth.token, addId).then((res) => {
      toast.success("Add Deleted");
      loadPostedAdds();
    });
  };

  return (
    <div>
      {/* <div>{JSON.stringify(adds, null, 4)}</div> */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 md:mt-16">
          <h1 className="text-3xl font-bold text-gray-600">Dashboard</h1>
        </div>
      </header>
      <div className="flex flex-wrap items-center justify-center">
        {adds.map((a) => (
          <Card
            key={a._id}
            a={a}
            owner={true}
            showViewMoreButton={false}
            handleAddDelete={handleAddDelete}
          />
        ))}
        {/* {JSON.stringify(adds, null, 4)} */}
      </div>
    </div>
  );
};

export default Dashboard;
