import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const Experience = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(
    `https://localhost:7292/api/Experiences/Users/${id}`
  );

  // Log data for debugging
  console.log("Fetched Experience Data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Add condition to check if data is available and it's an array
  if (!data || !Array.isArray(data)) {
    return <p>No experience data available.</p>;
  }

  return (
    <div className="experience-section">
      <h1 className="font-bold">Experience</h1>
      <hr className="border-black mb-1" />
      {data.length > 0 ? (
        data.map((experience, index) => (
          <div key={index} className="experience-item">
            <ul className="flex justify-between items-center">
              <li className="flex-1">
                <h2 className="text-base font-semibold">
                  {experience.experienceTitle}
                </h2>
              </li>
              <li className="flex-none">
                <p className="text-sm font-semibold">
                  {new Date(experience.experienceDate).toLocaleDateString()}
                </p>
              </li>
            </ul>
            <p className="text-sm font-medium">
              {experience.experienceOrganization}
            </p>
            <p className="text-sm">{experience.experienceLocation}</p>
            {experience.experienceResponsibilities ? (
              <ul className="list-disc pl-5 text-justify">
                {experience.experienceResponsibilities
                  .split(",")
                  .map((resp, respIndex) => (
                    <li key={respIndex} className="text-sm">
                      {resp.trim()}
                    </li>
                  ))}
              </ul>
            ) : (
              <p>No experience responsibilities available.</p>
            )}
          </div>
        ))
      ) : (
        <p>No experience details available.</p>
      )}
    </div>
  );
};

export default Experience;
