import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = (userId) => {
    navigate(`/resume/${userId}`);
  };
  return (
    <div className="grid h-screen place-items-center">
      <button
        onClick={() => handleClick(2)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        View Resume
      </button>
    </div>
  );
};
