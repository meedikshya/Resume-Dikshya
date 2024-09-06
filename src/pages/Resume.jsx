import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
// import { Skills } from "./Skills";
import Certifications from "../components/Certifications";
// import { TechnicalSkills } from "../components/TechnicalSkills";
// import PersonalSkills from "../components/PersonalSkills";
import "../App.css";

export const Resume = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-svh">
      <div className="max-w-[50rem] min-h-svh mx-auto bg-white p-6 pl-14 pr-12">
        <div className="font">
          <Header />
          <Profile />
          <Experience />
          <Education />
          <Projects />
          {/* <TechnicalSkills />
          <PersonalSkills /> */}
          <Skills />
          <Certifications />
        </div>
      </div>
    </div>
  );
};
