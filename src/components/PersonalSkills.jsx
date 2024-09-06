// import React from "react";
// import useFetchData from "../hooks/useFetchData";
// import { useParams } from "react-router-dom";

// const PersonalSkills = () => {
//   const { id } = useParams();
//   const { data, loading, error } = useFetchData(
//     `https://localhost:7292/api/PersonalSkills/Users/${id}`
//   );

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   if (!Array.isArray(data) || data.length === 0) {
//     return <p>No personal skills available.</p>;
//   }

//   return (
//     <div>
//       <div className="flex flex-wrap">
//         {data.map((item, index) => (
//           <div key={index} className="w-full sm:w-1/2 p-2">
//             <h2 className="text-sm font-semibold mb-1">
//               {item.personalSkillType}:
//             </h2>
//             <p className="text-sm">
//               {item.personalSkillItems
//                 .replace(/["']/g, "") // Remove any quotes around the skills
//                 .split(",") // Split the string into an array based on commas
//                 .map((skill, skillIndex) => (
//                   <span key={skillIndex} className="mr-2">
//                     {skill.trim()}
//                     {skillIndex !==
//                       item.personalSkillItems.split(",").length - 1 && ","}
//                   </span>
//                 ))}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PersonalSkills;
