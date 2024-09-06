import React from "react";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

export const TechnicalSkills = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(
    `https://localhost:7292/api/TechnicalSkills/Users/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Make sure the data is an array and handle any response issues
  if (!data || !Array.isArray(data)) {
    return <p>No technical skills available.</p>;
  }

  return (
    <div>
      <h1 className="font-bold">Technical Skills</h1>
      <div className="flex flex-wrap">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
              <h2 className="text-sm font-semibold">
                {item.technicalSkillType}:
              </h2>
              <ul>
                <li className="mt-1 text-sm">{item.technicalSkillItem}</li>
              </ul>
            </div>
          ))
        ) : (
          <p>No technical skills available.</p>
        )}
      </div>
    </div>
  );
};
