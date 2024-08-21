import React from "react";
import { useFetchData } from "../hooks/useEffect";

const Projects = () => {
  const { data, loading, error } = useFetchData("http://localhost:3000/user");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="">
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className="projects">
            <h1 className="font-bold">Projects</h1>
            <hr className="border-black mb-1" />
            <p className="text-[0.9rem] text-justify font-normal">
              {item.projects.name}
            </p>
            {Array.isArray(item.projects) &&
              item.projects.length > 0 &&
              item.projects.map((pro, proIndex) => (
                <div key={proIndex} className="text-justify">
                  <ul className="flex justify-between items-center underline">
                    <li className="flex-1">
                      <a href={pro.pLink} className="underline">
                        <h2 className="text-sm font-semibold">{pro.name}</h2>
                      </a>
                    </li>
                    <li className="flex-none">
                      <a href={pro.gLink} className="underline">
                        <span className="text-sm font-semibold">
                          {pro.github}
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="text-sm mt-2 w-[30rem]">{pro.description}</p>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Projects;
