import React from "react";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

const Projects = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(
    `https://localhost:7292/api/Projects/Users/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="projects-section">
      <h1 className="font-bold">Projects</h1>
      <hr className="border-black mb-1" />
      {Array.isArray(data) && data.length > 0 ? (
        data.map((pro, proIndex) => (
          <div key={proIndex} className="projects">
            <ul className="flex justify-between items-center underline">
              <li className="flex-1">
                <a href={pro.projectDemo} className="underline">
                  <h2 className="text-sm font-semibold">{pro.projectName}</h2>
                </a>
              </li>
              <li className="flex-none">
                {pro.projectGithubLink && (
                  <a href={pro.projectGithubLink} className="underline">
                    <span className="text-sm font-semibold">
                      {pro.projectGithub}
                    </span>
                  </a>
                )}
              </li>
            </ul>
            <p className="text-sm mt-2 w-[30rem]">{pro.projectDescription}</p>
          </div>
        ))
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default Projects;
