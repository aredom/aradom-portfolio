export default function Experience() {
    return (
      <section className="py-12 border-b border-gray-200" id="experience">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6 ">
          <ExperienceItem 
            title="Web Designer"
            company="Soft Company"
            period="2000 - 2050"
            description="Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"
          />
          <ExperienceItem 
            title="Web Developer"
            company="Hard Company"
            period="2050 - 2100"
            description="Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"
          />
          {/* Add more ExperienceItem components as needed */}
        </div>
      </section>
    )
  }
  
  function ExperienceItem({ title, company, period, description }) {
    return (
      <div className="relative pl-8 border-l-2 border-gray-200">
        <div className="absolute -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{company} | <span className="italic">{period}</span></p>
        <p className="mt-2">{description}</p>
      </div>
    )
  }