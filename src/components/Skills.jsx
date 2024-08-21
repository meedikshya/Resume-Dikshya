import React from "react";
import { useFetchData } from "../hooks/useEffect";

const Skills = () => {
  const { data, loading, error } = useFetchData("http://localhost:3000/user");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className="profile">
            <h1 className="font-bold">Skills</h1>
            <hr className="border-black mb-1" />

            <div className="flex flex-wrap">
              {item.skills &&
                item.skills.map((skillCategory, categoryIndex) => (
                  <div key={categoryIndex} className="w-1/2 p-2">
                    <h2 className="text-sm font-semibold">
                      {skillCategory.category}:
                    </h2>
                    <ul className="">
                      {skillCategory.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="">
                          {skill.type ? (
                            <div>
                              <span className="font-semibold">
                                {skill.type}:{" "}
                              </span>
                              <span className="text-sm">
                                {skill.items.join(", ")}
                              </span>
                            </div>
                          ) : (
                            <p className="text-sm">{skill}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Skills;
