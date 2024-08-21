import React from "react";
import { useFetchData } from "../hooks/useEffect";

const Education = () => {
  const { data, loading, error } = useFetchData("http://localhost:3000/user");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="">
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className="profile">
            <h1 className="font-bold">Education</h1>
            <hr className="border-black mb-1" />
            {Array.isArray(item.education) &&
              item.education.length > 0 &&
              item.education.map((edu, eduIndex) => (
                <div key={eduIndex} className=" text-justify">
                  <ul className="flex justify-between items-center">
                    <li className="flex-1">
                      <h2 className="text-sm font-semibold">{edu.degree}</h2>
                    </li>
                    <li className="flex-none">
                      <p className="text-sm font-semibold">{edu.dates}</p>
                    </li>
                  </ul>
                  <ul className="flex justify-between items-center">
                    <li>
                      <p className="text-sm ">{edu.institution}</p>
                    </li>
                    <li>
                      <p className="text-sm">{edu.location}</p>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Education;
