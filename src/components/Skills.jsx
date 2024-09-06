import React from "react";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

export const Skills = () => {
  const { id } = useParams();

  // Fetch Technical Skills
  const {
    data: technicalSkills,
    loading: techLoading,
    error: techError,
  } = useFetchData(`https://localhost:7292/api/TechnicalSkills/Users/${id}`);

  // Fetch Personal Skills
  const {
    data: personalSkills,
    loading: personalLoading,
    error: personalError,
  } = useFetchData(`https://localhost:7292/api/PersonalSkills/Users/${id}`);

  if (techLoading || personalLoading) return <p>Loading...</p>;
  if (techError) return <p>Error: {techError.message}</p>;
  if (personalError) return <p>Error: {personalError.message}</p>;

  return (
    <div>
      <h1 className="font-bold">Skills</h1>
      <hr className="border-black mb-1" />
      <div className="flex flex-wrap">
        {/* Technical Skills on the left */}
        <div className="w-full md:w-1/2">
          <h1 className="font-bold">Technical Skills</h1>
          <div>
            {technicalSkills && technicalSkills.length > 0 ? (
              technicalSkills.map((item, index) => (
                <div key={index} className="w-full">
                  <h2 className="text-sm font-semibold">
                    {item.technicalSkillType}:
                  </h2>
                  <ul>
                    <li className="mt-1 text-sm">
                      {item.technicalSkillItem.replace(/["']/g, "")}
                    </li>
                  </ul>
                </div>
              ))
            ) : (
              <p>No technical skills available.</p>
            )}
          </div>
        </div>

        {/* Personal Skills on the right */}
        <div className="w-full md:w-1/2">
          <h1 className="font-bold">Personal Skills</h1>
          <div className="flex flex-wrap">
            {personalSkills && personalSkills.length > 0 ? (
              personalSkills.map((item, index) => (
                <div key={index} className="w-full sm:w-1/2">
                  <h2 className="text-sm font-semibold mb-1">
                    {item.personalSkillType}:
                  </h2>
                  <p className="text-sm">
                    {item.personalSkillItems
                      .replace(/["']/g, "")
                      .split(",")
                      .map((skill, skillIndex) => (
                        <span key={skillIndex} className="mr-2">
                          {skill.trim()}
                          {skillIndex !==
                            item.personalSkillItems.split(",").length - 1 &&
                            ","}
                        </span>
                      ))}
                  </p>
                </div>
              ))
            ) : (
              <p>No personal skills available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
