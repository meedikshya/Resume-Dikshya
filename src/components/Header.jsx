// src/components/Header.jsx
import React from "react";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

const Header = () => {
  const { id } = useParams();
  // Accept userId as prop
  const { data, loading, error } = useFetchData(
    `https://localhost:7292/api/Users/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="profile mt-10">
      {data ? (
        <>
          <h1 className="text-4xl font-normal">{data.userName}</h1>
          <ul className="flex flex-row space-x-4 text-[0.8rem] mt-2">
            <li>Phone: {data.userPhone}</li>
            <li>
              Email:{" "}
              <a href={`mailto:${data.userEmail}`} className="underline">
                {data.userEmail}
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href={`https://github.com/${data.userGithub}`}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.userGithub}
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href={`https://www.linkedin.com/in/${data.userLinkedin}`}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.userLinkedin}
              </a>
            </li>
          </ul>
        </>
      ) : (
        <p>No profile information available.</p>
      )}
    </div>
  );
};

export default Header;
