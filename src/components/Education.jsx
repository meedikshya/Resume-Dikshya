import React from "react";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

const Education = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(
    `https://localhost:7292/api/Educations/Users/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="education">
      <h1 className="font-bold">Education</h1>
      <hr className="border-black mb-1" />
      {Array.isArray(data) && data.length > 0 ? (
        data.map((edu, eduIndex) => (
          <div key={eduIndex} className="education-item">
            <ul className="flex justify-between items-center">
              <li className="flex-1">
                <h2 className="text-sm font-semibold">{edu.educationDegree}</h2>
              </li>
              <li className="flex-none">
                <p className="text-sm font-semibold">
                  {new Date(edu.educationDate).toLocaleDateString()}
                </p>
              </li>
            </ul>
            <ul className="flex justify-between items-center">
              <li>
                <p className="text-sm">{edu.educationInstitution}</p>
              </li>
              <li>
                <p className="text-sm">{edu.educationLocation}</p>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <p>No education details available.</p>
      )}
    </div>
  );
};

export default Education;
