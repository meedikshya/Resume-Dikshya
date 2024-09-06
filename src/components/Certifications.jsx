import React from "react";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

const Certifications = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(
    `https://localhost:7292/api/Certifications/Users/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="certifications">
      <h1 className="font-bold">Certifications</h1>
      <hr className="border-black mb-1" />
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <a
            key={index}
            href={item.certificationLink}
            className="underline block text-justify text-sm"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Provides security and performance benefits
          >
            {item.certificationName}
          </a>
        ))
      ) : (
        <p>No certifications available.</p>
      )}
    </div>
  );
};

export default Certifications;
