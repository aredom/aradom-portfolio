import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaCogs, FaCloud } from 'react-icons/fa';

export default function Skills() {
  return (
    <section className="py-12 border-b border-gray-200 dark:border-gray-700" id="skills">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <SkillCard 
          skill="HTML" 
          icon={<FaHtml5 />}
          headline="Structure and content"
        />
        <SkillCard 
          skill="CSS" 
          icon={<FaCss3Alt />}
          headline="Styling and layout"
        />
        <SkillCard 
          skill="JavaScript" 
          icon={<FaJs />}
          headline="Interactivity and logic"
        />
        <SkillCard 
          skill="React" 
          icon={<FaReact />}
          headline="UI components and state management"
        />
        
        <SkillCard 
          skill="Nodejs" 
          icon={<FaNodeJs />}
          headline="JavaScript runtime for backend"
        />
        <SkillCard 
          skill="MongoDB" 
          icon={<FaDatabase />}
          headline="NoSQL database for modern applications"
        />
        <SkillCard 
          skill="Testing" 
          icon={<FaCogs />}
          headline="Ensuring the quality and functionality of software through testing"
        />
        <SkillCard 
          skill="Hosting" 
          icon={<FaCloud />}
          headline="Deploying applications to servers or cloud platforms"
        />
      </div>
    </section>
  )
}

function SkillCard({ skill, icon, headline }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-300">
      <div className="flex flex-col items-center text-center mb-4">
        <div className="text-4xl text-blue-600 dark:text-blue-400 mb-2">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{skill}</h3>
          <p className="text-gray-600 dark:text-gray-400">{headline}</p>
        </div>
      </div>
    </div>
  )
}
