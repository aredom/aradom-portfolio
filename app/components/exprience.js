export default function Experience() {
  return (
    <section className="py-12 border-b border-gray-200" id="experience">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6 ">
        <ExperienceItem
          title="Web Developer"
          company="Shemu Groups Company"
          period="2022 - Present"
          description="As a Web Developer at Shemu Groups Company, I was responsible for developing and maintaining multiple websites using a diverse tech stack. My primary focus was on creating responsive and user-friendly web applications. I utilized HTML, CSS, and JavaScript for frontend development, along with modern frameworks like React and Next.js to build dynamic and interactive user interfaces. On the backend, I worked with Node.js to create robust server-side applications. Additionally, I developed and maintained .NET applications using ASP.NET and C#. My role involved full-stack development, from designing database schemas to implementing complex business logic and creating intuitive user experiences. I also performed regular website maintenance, optimized performance, and ensured cross-browser compatibility."
        />
        <ExperienceItem
          title="Mobile App Developer"
          company="Freelance / Personal Projects"
          period="2019 - Present"
          description="As a self-taught Mobile App Developer, I've been focusing on creating cross-platform mobile applications using React Native. I've developed several personal project apps for both iOS and Android platforms, leveraging my expertise in JavaScript and React. My work involves designing intuitive user interfaces, implementing complex app functionalities, integrating RESTful APIs, and ensuring smooth performance across different devices. I've gained hands-on experience in the entire app development lifecycle, from conceptualization to deployment on app stores. Through these projects, I've honed my skills in state management, performance optimization, and responsive design specifically for mobile environments."
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