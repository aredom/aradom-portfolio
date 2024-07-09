export default function Skills() {
    return (
      <section className="py-12 border-b border-gray-200" id="skills">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillBar skill="HTML" percentage={95} />
          <SkillBar skill="CSS" percentage={85} />
          <SkillBar skill="JavaScript" percentage={90} />
          <SkillBar skill="React" percentage={88} />
          {/* Add more skills */}
        </div>
      </section>
    )
  }
  
  function SkillBar({ skill, percentage }) {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span>{skill}</span>
          <span>{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    )
  }