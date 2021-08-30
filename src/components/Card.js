import React from "react";
import { useHistory } from "react-router-dom";

export default function Card({
  a,
  handleAddDelete = (f) => f,
  owner = false,
  showViewMoreButton = true,
}) {
  const history = useHistory();
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg m-6  hover:shadow-2xl bg-gray-200 animate-pulse ">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{a.name}</div>
        <div class="font-bold text-lg mb-2">{a.position}</div>

        <p class="text-gray-700 text-base max-h-32 ">
          {a.about.substring(0, 100)}
        </p>
        {/* {a.image && a.image.contentType ? (
          <img
            src={`${process.env.REACT_APP_API}/add/image/${a._id}`}
            alt="no"
          />
        ) : (
          ""
        )} */}
      </div>
      <div class="flex px-6 pt-4 pb-2 justify-between">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{a.header}
        </span>
        {showViewMoreButton && (
          <button
            onClick={() => history.push(`/add/${a._id}`)}
            className="bg-gray-500 px-4 py-2 text-sm rounded-2xl text-white hover:bg-gray-700"
          >
            Show more
          </button>
        )}
      </div>
      {owner && (
        <div className="flex px-6 pt-4 pb-2  justify-end">
          <button
            className="bg-red-600 hover:bg-red-700 text-white text-bold px-4 py-2 rounded-xl"
            onClick={() => handleAddDelete(a._id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
