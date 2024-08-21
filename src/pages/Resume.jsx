import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import '../App.css';

export const Resume = () => {
  return (
    <div className='bg-[#333333] min-h-svh'>
      <div className='max-w-[50rem] min-h-svh mx-auto bg-white p-6 pl-14 pr-12'>
      <div className='font'>
        <Header />
        <Profile />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
      </div>
      </div>
    </div>
  );
};
