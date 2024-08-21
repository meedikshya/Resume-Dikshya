import React from "react";
import { useFetchData } from "../hooks/useEffect";

const Certifications = () => {
  const { data, loading, error } = useFetchData("http://localhost:3000/user");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="">
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className="certifications">
            <h1 className="font-bold">Certifications</h1>
            <hr className="border-black mb-1" />
            {Array.isArray(item.certifications) &&
              item.certifications.length > 0 &&
              item.certifications.map((cert, certIndex) => (
                <a href={cert.cLink} className="underline">
                  <div
                    key={certIndex}
                    className=" text-justify text-sm underline"
                  >
                    {cert.name}
                  </div>
                </a>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Certifications;
