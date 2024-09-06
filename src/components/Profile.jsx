import React from "react";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(
    `https://localhost:7292/api/Users/${id}`
  );

  console.log("Fetched Data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="profile">
      <h1 className="font-bold">Profile</h1>
      <hr className="border-black mb-1" />
      {data ? (
        <p className="text-[0.9rem] text-justify font-normal">
          {data.userSummary}
        </p>
      ) : (
        <p>No profile summary available.</p>
      )}
    </div>
  );
};

export default Profile;
